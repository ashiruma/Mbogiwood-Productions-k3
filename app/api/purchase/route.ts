import { NextResponse } from 'next/server';

// Example POST API to create a purchase record. Adapt to your DB driver.
// If you use Prisma, import your prisma client here: import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { movieId, amount, title, userId, paymentRef } = body;

    // TODO: replace this with your DB call, e.g. Prisma:
    // const purchase = await prisma.purchase.create({ data: { movieId, amount, title, userId, paymentRef } })

    // Placeholder response:
    const purchase = {
      id: 'placeholder-id',
      movieId,
      amount,
      title,
      userId: userId ?? null,
      paymentRef: paymentRef ?? null,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, purchase }, { status: 201 });
  } catch (err) {
    console.error('purchase api error', err);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}
