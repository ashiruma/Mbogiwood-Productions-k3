import { NextResponse } from 'next/server';

/**
 * API route to create a purchase record.
 * This template will try to use Prisma if DATABASE_URL is set and lib/prisma.ts available.
 * Otherwise it returns a placeholder response.
 *
 * Expected POST body: { movieId, amount, title?, userId?, paymentRef? }
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { movieId, amount, title, userId, paymentRef } = body;

    // If prisma is configured, write to DB
    try {
      // Dynamically import prisma so this file is still usable if you don't set up prisma yet
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { prisma } = await import('@/lib/prisma');

      const purchase = await prisma.purchase.create({
        data: {
          movieId,
          amount: Number(amount),
          title: title ?? null,
          userId: userId ?? null,
          paymentRef: paymentRef ?? null,
        },
      });

      return NextResponse.json({ success: true, purchase }, { status: 201 });
    } catch (dbErr) {
      // If prisma not set up, fallback to placeholder response
      console.warn('Prisma not configured or failed: ', dbErr);
      const placeholder = {
        id: `placeholder-${Date.now()}`,
        movieId,
        amount,
        title,
        userId: userId ?? null,
        paymentRef: paymentRef ?? null,
        createdAt: new Date().toISOString(),
      };
      return NextResponse.json({ success: true, purchase: placeholder }, { status: 201 });
    }
  } catch (err) {
    console.error('purchase api error', err);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}
