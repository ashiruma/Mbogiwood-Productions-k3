import React from 'react';

// Define the types for the component's props
interface StatCardProps {
    title: string;
    value: string | number | undefined;
    icon: React.ReactNode; // ReactNode allows passing JSX like icons
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
    // Ensure value is a number before formatting, default to 0
    const numericValue = Number(value) || 0;

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <div className="bg-indigo-500 p-3 rounded-full">
                    {icon} 
                </div>
                <div className="ml-4">
                    <p className="text-gray-400 text-sm">{title}</p>
                    <p className="text-2xl font-bold text-white">KES {numericValue.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default StatCard;

// Example Icon (no changes needed here, it's just JSX)
export const CashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);