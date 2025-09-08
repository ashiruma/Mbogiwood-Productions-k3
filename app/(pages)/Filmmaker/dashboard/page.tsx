// FILE: app/(pages)/filmmaker/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api";
import { RevenueData, Payout } from "@/types";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function FilmmakerDashboardPage() {
    const [revenueData, setRevenueData] = useState<RevenueData | null>(null);
    const [payouts, setPayouts] = useState<Payout[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // State for the payout form
    const [showPayoutForm, setShowPayoutForm] = useState(false);
    const [payoutAmount, setPayoutAmount] = useState("");
    const [mpesaNumber, setMpesaNumber] = useState("");

    // --- Data Fetching Logic (No changes needed here) ---
    useEffect(() => {
        // ... your existing fetchRevenueData function
    }, []);

    const handlePayoutRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would add the API call to your backend to submit the payout request
        console.log("Submitting payout for:", { amount: payoutAmount, phone: mpesaNumber });
        // After submission, you can hide the form and show a success message
        setShowPayoutForm(false);
    };

    if (loading) { /* ... */ }
    if (error) { /* ... */ }

    return (
        <main className="container mx-auto py-12 px-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Your Dashboard</h1>
                {/* Show Payout button if there's a balance */}
                {revenueData && revenueData.current_balance_cents > 0 && (
                    <Button onClick={() => setShowPayoutForm(!showPayoutForm)}>
                        {showPayoutForm ? "Cancel" : "Request Payout"}
                    </Button>
                )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* ... your StatCard components ... */}
            </div>

            {/* Payout Request Form (conditionally rendered) */}
            {showPayoutForm && (
                <form onSubmit={handlePayoutRequest} className="bg-card p-6 rounded-lg shadow mb-8 space-y-4">
                    <h2 className="text-2xl font-semibold">New Payout Request</h2>
                    <div>
                        <label htmlFor="amount">Amount (KES)</label>
                        <Input id="amount" type="number" value={payoutAmount} onChange={(e) => setPayoutAmount(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="mpesa_number">M-Pesa Number</label>
                        <Input id="mpesa_number" type="text" value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} required />
                    </div>
                    <Button type="submit">Submit Request</Button>
                </form>
            )}

            {/* Payout History Table */}
            <h2 className="text-2xl font-semibold mb-4">Payout History</h2>
            <div className="bg-card p-4 rounded-lg shadow">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payouts.length > 0 ? (
                            payouts.map((payout) => (
                                <TableRow key={payout.id}>
                                    <TableCell>{new Date(payout.created_at).toLocaleDateString()}</TableCell>
                                    <TableCell>{(payout.amount_cents / 100).toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}</TableCell>
                                    <TableCell><Badge>{payout.status}</Badge></TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center">No payout history.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}