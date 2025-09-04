// app/(pages)/dashboard/earnings/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, Wallet } from 'lucide-react';

type EarningsData = {
  total_revenue: string;
  total_platform_fees: string;
  total_filmmaker_payout: string;
  successful_sales_count: number;
};

export default function EarningsPage() {
  const router = useRouter();
  const [earnings, setEarnings] = useState<EarningsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchEarnings = async () => {
      try {
        const response = await apiClient.get('/analytics/earnings/');
        setEarnings(response.data);
      } catch (error) {
        console.error("Failed to fetch earnings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEarnings();
  }, [router]);

  if (isLoading) {
    return <main className="flex-grow p-6 text-center"><p>Loading Earnings Data...</p></main>;
  }

  return (
    <main className="flex-grow p-6">
        <header className="flex h-14 items-center gap-4 border-b bg-secondary px-6 mb-8 -mx-6 -mt-6">
            <h1 className="font-semibold text-lg">Earnings & Payouts</h1>
        </header>
        {earnings ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card"><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Total Revenue</CardTitle><TrendingUp className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">KES {earnings.total_revenue}</div><p className="text-xs text-muted-foreground">Total sales from your films</p></CardContent></Card>
            <Card className="bg-card"><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Successful Sales</CardTitle><Users className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">+{earnings.successful_sales_count}</div><p className="text-xs text-muted-foreground">Total number of purchases</p></CardContent></Card>
            <Card className="bg-card"><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Platform Fees (30%)</CardTitle><DollarSign className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">KES {earnings.total_platform_fees}</div><p className="text-xs text-muted-foreground">Mbogiwood platform commission</p></CardContent></Card>
            <Card className="bg-card"><CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Your Payout (70%)</CardTitle><Wallet className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold text-primary">KES {earnings.total_filmmaker_payout}</div><p className="text-xs text-muted-foreground">Your total earnings</p></CardContent></Card>
          </div>
        ) : (
          <p className="text-muted-foreground">Could not load earnings data.</p>
        )}
      </main>
  );
}