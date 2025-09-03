// app/api/mpesa/stk-push/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import axios from "axios";
import { getAccessToken, generatePassword, generateTimestamp } from "@/lib/mpesa";

interface StkPushRequestBody {
  amount: number;
  phoneNumber: string;
  movieId: string;
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ message: "Not authorized." }, { status: 401 });
  }

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!currentUser) {
    return NextResponse.json({ message: "User not found." }, { status: 404 });
  }

  try {
    const { amount, phoneNumber, movieId }: StkPushRequestBody =
      await request.json();

    const accessToken = await getAccessToken();
    const shortcode = process.env.MPESA_SHORTCODE!;
    const passkey = process.env.MPESA_PASSKEY!;
    const timestamp = generateTimestamp();
    const password = generatePassword(shortcode, passkey, timestamp);
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/mpesa/callback`;

    const stkResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: shortcode,
        PhoneNumber: phoneNumber,
        CallBackURL: callbackUrl,
        AccountReference: "Mbogiwood",
        TransactionDesc: "Film Purchase",
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    const { CheckoutRequestID } = stkResponse.data;

    await prisma.pendingTransaction.create({
      data: {
        checkoutRequestId: CheckoutRequestID,
        userId: currentUser.id,
        movieId,
      },
    });

    return NextResponse.json(
      { message: "STK push initiated successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    const errMessage = error.response?.data?.errorMessage || error.message;
    console.error("STK Push Error:", errMessage);
    return NextResponse.json(
      { message: "Failed to initiate STK push.", error: errMessage },
      { status: 500 }
    );
  }
}
