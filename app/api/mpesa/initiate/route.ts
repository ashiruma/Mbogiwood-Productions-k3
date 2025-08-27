import { NextResponse } from 'next/server';

/**
 * Stub MPesa initiate endpoint.
 * Replace this stub with actual MPesa integration using your credentials.
 *
 * Client should POST { movieId, amount, phoneNumber, title? } and the API should
 * call the payment provider, then return { checkoutRequestId, statusUrl? }.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { movieId, amount, phoneNumber, title } = body;

    // TODO: call real MPesa API here using env vars like MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET
    // For now we simulate an initiation:
    const checkoutRequestId = `ck_${Date.now()}`;

    // Simulate a short delay like a network call
    await new Promise((res) => setTimeout(res, 300));

    return NextResponse.json({ success: true, checkoutRequestId });
  } catch (err) {
    console.error('mpesa initiate error', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
