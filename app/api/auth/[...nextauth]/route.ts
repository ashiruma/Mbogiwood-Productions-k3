// FILE: app/api/auth/[...nextauth]/route.ts

import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

// It's better practice to use a non-public variable for server-side fetches
const DJANGO_API_URL = process.env.DJANGO_API_URL;

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    // Note: Use DJANGO_API_URL for server-side calls
    const response = await fetch(`${DJANGO_API_URL}/api/auth/jwt/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: token.refreshToken }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access,
      accessTokenExpires: Date.now() + 5 * 60 * 1000, // 5 minutes from now
      refreshToken: refreshedTokens.refresh ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.error("RefreshAccessTokenError", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          // STEP 1: LOGIN TO GET TOKENS
          const authResponse = await fetch(`${DJANGO_API_URL}/api/auth/jwt/create/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
          
          const authData = await authResponse.json();

          if (!authResponse.ok || !authData.access) {
            console.error("Failed to get tokens:", authData);
            return null;
          }
          
          // STEP 2: USE ACCESS TOKEN TO FETCH USER DETAILS
          const userResponse = await fetch(`${DJANGO_API_URL}/api/auth/users/me/`, {
              headers: {
                  'Authorization': `Bearer ${authData.access}` // This is CORRECT`
              }
          });

          if (!userResponse.ok) {
              console.error("Failed to fetch user details");
              return null;
          }

          const userData = await userResponse.json();
          
          // COMBINE USER DATA AND TOKENS
          return {
            id: userData.id,
            email: userData.email,
            name: userData.full_name,
            accessToken: authData.access,
            refreshToken: authData.refresh,
          };

        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // This callback is called whenever a JWT is created or updated.
    async jwt({ token, user }) {
      // The `user` object is only passed on the initial sign-in.
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        // Set an expiry time for the access token, e.g., 5 minutes
        token.accessTokenExpires = Date.now() + 5 * 60 * 1000;
      }

      // If the access token has not expired, return it.
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // If the access token has expired, try to refresh it.
      return refreshAccessToken(token);
    },
    // This callback is called whenever a session is checked.
    async session({ session, token }) {
      // Pass user data and tokens to the session object
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      session.accessToken = token.accessToken;
      session.error = token.error;
      
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error", // Optional: Custom error page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };