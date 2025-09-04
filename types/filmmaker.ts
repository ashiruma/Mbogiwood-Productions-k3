// Describes the structure for a single film's performance stats
export interface FilmPerformance {
    id: number;
    title: string;
    cover_image: string | null;
    release_date: string;
    total_revenue: string; // The backend DecimalField is best handled as a string
    total_sales: number;
}

// Describes the structure for a single payout record
export interface PayoutHistory {
    id: number;
    amount: string;
    status: 'pending' | 'completed' | 'failed'; // Using literal types for status
    created_at: string; // ISO date string
}

// The main interface for the entire dashboard API response
export interface FilmmakerDashboardData {
    total_revenue: string;
    total_paid_out: string;
    current_balance: string;
    film_performance: FilmPerformance[];
    payout_history: PayoutHistory[];
}