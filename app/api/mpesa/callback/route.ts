// in app/api/mpesa/callback/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

// Define the shape of the callback data from Safaricom
interface MpesaCallbackBody {
    Body: {
        stkCallback: {
            CheckoutRequestID: string;
            ResultCode: number;
            ResultDesc: string;
            CallbackMetadata?: {
                Item: { Name: string; Value: string | number }[];
            };
        }
    }
}

export async function POST(request: NextRequest) {
    const callbackData: MpesaCallbackBody = await request.json();
    console.log("M-Pesa Callback Received:", JSON.stringify(callbackData, null, 2));

    const { CheckoutRequestID, ResultCode, ResultDesc } = callbackData.Body.stkCallback;

    if (ResultCode === 0) { // Success
        try {
            const pendingTx = await prisma.pendingTransaction.findUnique({
                where: { checkoutRequestId: CheckoutRequestID },
            });

            if (!pendingTx) {
                console.error("Callback for unknown transaction:", CheckoutRequestID);
                return NextResponse.json({ message: "Transaction not found" }, { status: 404 });
            }

            // Create the purchase record
            await prisma.purchase.create({
                data: {
                    userId: pendingTx.userId,
                    movieId: pendingTx.movieId,
                },
            });

            // Clean up the pending transaction
            await prisma.pendingTransaction.delete({
                where: { checkoutRequestId: CheckoutRequestID },
            });

            console.log(`Purchase processed for user ${pendingTx.userId}, movie ${pendingTx.movieId}`);

        } catch (error: any) {
            console.error("Error processing successful callback:", error.message);
        }
    } else {
        // Payment failed or was cancelled
        console.log(`Payment failed for ${CheckoutRequestID}. Desc: ${ResultDesc}`);
        
        try {
            await prisma.pendingTransaction.deleteMany({
                where: { checkoutRequestId: CheckoutRequestID },
            });
        } catch (error: any) {
             console.error("Error deleting failed pending transaction:", error.message);
        }
    }

    // Acknowledge receipt of the callback to Safaricom
    return NextResponse.json({ message: "Callback received successfully" });
}
