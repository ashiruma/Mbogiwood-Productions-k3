import { NextResponse } from "next/server";

/**
 * Minimal/simulated API for initiating an M-Pesa checkout flow.
 * For a production integration this would:
 *  - Validate the user/session
 *  - Create a pendingTransaction in DB
 *  - Call Safaricom's API and return the CheckoutRequestID
 *
 * This stub returns a synthetic checkoutRequestId so the front-end can proceed.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const movieId = body?.movieId ?? "unknown";

    // Simulate creating a checkout request id
    const checkoutRequestId = `SIM-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    // In a real implementation you would persist a pendingTransaction with checkoutRequestId
    // and return the real CheckoutRequestID from Safaricom.

    return NextResponse.json({ success: true, checkoutRequestId, movieId });
  } catch (err) {
    console.error("initiate mpesa error", err);
    return NextResponse.json({ success: false, error: "Could not initiate payment" }, { status: 500 });
  }
}
