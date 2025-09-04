import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getFilmmakerDashboard } from '../../services/filmmakerService';
import { FilmmakerDashboardData } from '../../types/filmmaker';
import { RootState } from '../store'; // Make sure to import your RootState type

// Define the shape of our slice's state
interface FilmmakerDashboardState {
    data: FilmmakerDashboardData | null;
    isLoading: boolean;
    error: string | null;
}

// The async thunk to fetch the data
export const fetchFilmmakerDashboard = createAsyncThunk<
    FilmmakerDashboardData, // Type for the successful return value
    void, // Type for the thunk argument (not needed here)
    { rejectValue: string } // Type for the rejection value
>(
    'filmmakerDashboard/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getFilmmakerDashboard();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.detail || 'Failed to fetch data.');
        }
    }
);

const initialState: FilmmakerDashboardState = {
    data: null,
    isLoading: false,
    error: null,
};

const filmmakerDashboardSlice = createSlice({
    name: 'filmmakerDashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmmakerDashboard.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFilmmakerDashboard.fulfilled, (state, action: PayloadAction<FilmmakerDashboardData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFilmmakerDashboard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'An unknown error occurred.';
            });
    },
});

// Selector to get the whole state
export const selectFilmmakerDashboard = (state: RootState) => state.filmmakerDashboard;

export default filmmakerDashboardSlice.reducer;