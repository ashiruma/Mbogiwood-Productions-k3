// FILE: hooks/useAxiosAuth.ts
"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import apiClient from "@/lib/api"; // Import your base apiClient

const useAxiosAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    // Interceptor to add the Authorization header to requests
    const requestIntercept = apiClient.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${session?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      // Clean up the interceptor when the component unmounts
      apiClient.interceptors.request.eject(requestIntercept);
    };
  }, [session]); // Re-run the effect when the session changes

  return apiClient; // Return the configured apiClient instance
};

export default useAxiosAuth;