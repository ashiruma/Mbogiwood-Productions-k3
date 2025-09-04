import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks'; // Import typed hook
import { fetchFilmmakerDashboard, selectFilmmakerDashboard } from '../../store/slices/filmmakerDashboardSlice';
import Layout from '../../components/layout/Layout';
import StatCard, { CashIcon } from '../../components/dashboard/StatCard';
import { FilmIcon, CollectionIcon } from '@heroicons/react/outline';
import { FilmPerformance, PayoutHistory } from '../../types/filmmaker';

// Typed props for the inner table components
const FilmPerformanceTable: React.FC<{ films?: FilmPerformance[] }> = ({ films }) => (
    <div className="bg-gray-800 p-4 rounded-lg mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Film Performance</h3>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
                {/* ... table head ... */}
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {films?.map(film => (
                        <tr key={film.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{film.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{film.total_sales}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">KES {Number(film.total_revenue).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const PayoutHistoryTable: React.FC<{ payouts?: PayoutHistory[] }> = ({ payouts }) => (
     <div className="bg-gray-800 p-4 rounded-lg mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Payout History</h3>
         <p className="text-gray-400">Payout history table coming soon...</p>
    </div>
);


const FilmmakerDashboardPage: React.FC = () => {
    const dispatch = useAppDispatch(); // Use the typed dispatch hook
    const { data, isLoading, error } = useSelector(selectFilmmakerDashboard);

    useEffect(() => {
        dispatch(fetchFilmmakerDashboard());
    }, [dispatch]);

    if (isLoading) {
        return <Layout><div className="text-center p-10">Loading Dashboard...</div></Layout>;
    }

    if (error) {
        return <Layout><div className="text-center p-10 text-red-500">Error: {error}</div></Layout>;
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-white mb-6">Filmmaker Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Current Balance" value={data?.current_balance} icon={<CashIcon />} />
                    <StatCard title="Total Revenue" value={data?.total_revenue} icon={<CollectionIcon className="h-6 w-6 text-white"/>} />
                    <StatCard title="Total Paid Out" value={data?.total_paid_out} icon={<FilmIcon className="h-6 w-6 text-white"/>} />
                </div>
                <FilmPerformanceTable films={data?.film_performance} />
                <PayoutHistoryTable payouts={data?.payout_history} />
            </div>
        </Layout>
    );
};

export default FilmmakerDashboardPage;