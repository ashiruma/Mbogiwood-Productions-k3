// in app/api/mpesa/stk-push/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { getServerSession } from "next-auth/next";
//import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

// Define the expected request body structure
interface StkPushRequestBody {
    amount: number;
    phoneNumber: string;
    movieId: string;
}

// Function to get the M-Pesa access token
async function getAccessToken(): Promise<string> {
    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    
    try {
        const { data } = await axios.get(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', 
            { headers: { 'Authorization': `Basic ${auth}` } }
        );
        return data.access_token;
    } catch (error: any) {
        console.error("Access Token Error:", error.message);
        throw new Error("Could not get M-Pesa access token.");
    }
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ message: "Not authorized." }, { status: 401 });
    }
    
    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email }});
    if (!currentUser) {
        return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    try {
        const accessToken = await getAccessToken();
        const { amount, phoneNumber, movieId }: StkPushRequestBody = await request.json();

        const shortcode = process.env.MPESA_SHORTCODE!;
        const passkey = process.env.MPESA_PASSKEY!;
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
        const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
        const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/mpesa/callback`;

        const stkResponse = await axios.post(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            {
                BusinessShortCode: shortcode,
                Password: password,
                Timestamp: timestamp,
                TransactionType: 'CustomerPayBillOnline',
                Amount: amount,
                PartyA: phoneNumber,
                PartyB: shortcode,
                PhoneNumber: phoneNumber,
                CallBackURL: callbackUrl,
                AccountReference: "Mbogiwood",
                TransactionDesc: 'Film Purchase',
            },
            { headers: { 'Authorization': `Bearer ${accessToken}` } }
        );

        const { CheckoutRequestID } = stkResponse.data;
        
        await prisma.pendingTransaction.create({
            data: {
                checkoutRequestId: CheckoutRequestID,
                userId: currentUser.id,
                movieId: movieId,
            }
        });

        return NextResponse.json({ message: "STK push initiated successfully." }, { status: 200 });

    } catch (error: any) {
        const errMessage = error.response?.data?.errorMessage || error.message;
        console.error("STK Push Error:", errMessage);
        return NextResponse.json({ message: "Failed to initiate STK push.", error: errMessage }, { status: 500 });
    }
}
