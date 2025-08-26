import { NextResponse } from "next/server";

/**
 * Mock M-Pesa STK Push endpoint (temporary)
 * Endpoint: POST /api/mpesa/stk-push
 *
 * This returns a success payload so the MpesaButton component can show the success flow
 * without a real M-Pesa integration during frontend development.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    // Log payload for debugging in server logs (optional)
    // console.log("Mock MPESA request:", body);

    return NextResponse.json(
      {
        message: "Mock STK Push initiated. Check your phone (mock).",
        request: body,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Mock MPESA failed" }, { status: 500 });
  }
}