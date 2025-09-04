import axiosInstance from './axiosInstance'; // Your configured axios instance
import { FilmmakerDashboardData } from '../types/filmmaker';

export const getFilmmakerDashboard = async (): Promise<FilmmakerDashboardData> => {
    try {
        // Use a generic to tell axios what data type to expect
        const response = await axiosInstance.get<FilmmakerDashboardData>('/api/v1/filmmakers/dashboard/');
        return response.data;
    } catch (error: any) {
        // Handle or throw error to be caught by Redux thunk
        throw error.response?.data || 'Something went wrong while fetching dashboard data.';
    }
};