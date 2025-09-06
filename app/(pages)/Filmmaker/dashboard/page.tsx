// FILE: app/(pages)/filmmaker/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api";
import { RevenueData } from "@/types"; // We'll create this type next
import StatCard from "@/components/dashboard/StatCard";

export default function FilmmakerDashboardPage() {
    const [revenueData, setRevenueData] = useState<RevenueData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRevenueData() {
            try {
                const response = await apiClient.get<RevenueData>("/api/filmmaker/revenue/");
                setRevenueData(response.data);
            } catch (err) {
                console.error("Failed to fetch revenue data:", err);
                setError("Could not load your revenue data.");
            } finally {
                setLoading(false);
            }
        }

        fetchRevenueData();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading dashboard...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <main className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Revenue" value={revenueData?.total_revenue_cents} />
                <StatCard title="Total Paid Out" value={revenueData?.total_paid_out_cents} />
                <StatCard title="Current Balance" value={revenueData?.current_balance_cents} />
            </div>
            {/* We'll add the payout request form and history table here in the next steps */}
        </main>
    );
}