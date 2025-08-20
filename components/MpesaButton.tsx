// in app/components/MpesaButton.tsx

'use client';

import React, { useState, FC } from 'react';
import axios from 'axios';

// A simple spinner component for the loading state
const Spinner: FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

// Define the types for the component's props
interface MpesaButtonProps {
  movieId: string;
  amount: number;
  title: string;
}

const MpesaButton: FC<MpesaButtonProps> = ({ movieId, amount, title }) => {
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handlePayment = async () => {
        if (!/^(254)\d{9}$/.test(phoneNumber)) {
            setError('Please enter a valid phone number starting with 254 (e.g., 254712345678).');
            return;
        }

        setError('');
        setSuccessMessage('');
        setLoading(true);

        try {
            const response = await axios.post('/api/mpesa/stk-push', { amount, phoneNumber, movieId });
            if (response.status === 200) {
                setSuccessMessage('Success! Check your phone to enter your M-Pesa PIN.');
                setTimeout(() => {
                    setShowModal(false);
                    setSuccessMessage('');
                }, 5000);
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'An unexpected error occurred.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
                Buy Now (Ksh {amount})
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 sm:p-8 w-full max-w-md text-white">
                        <h2 className="text-2xl font-bold mb-2">Complete Your Purchase</h2>
                        <p className="text-zinc-400 mb-6">You are buying "{title}" for Ksh {amount}.</p>
                        
                        <div className="space-y-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-zinc-300">
                                M-Pesa Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={phoneNumber}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                                placeholder="254712345678"
                                className="w-full bg-zinc-800 border border-zinc-600 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                        {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}

                        <div className="flex items-center justify-end space-x-4 mt-8">
                            <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white font-medium py-2 px-4 rounded-md transition duration-200" disabled={loading}>
                                Cancel
                            </button>
                            <button onClick={handlePayment} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 flex items-center disabled:bg-red-800 disabled:cursor-not-allowed" disabled={loading}>
                                {loading ? <Spinner /> : 'Confirm Payment'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MpesaButton;
