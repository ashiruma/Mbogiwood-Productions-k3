import { configureStore } from '@reduxjs/toolkit';
import filmmakerDashboardReducer from './slices/filmmakerDashboardSlice';
// ... other reducers

export const store = configureStore({
  reducer: {
    filmmakerDashboard: filmmakerDashboardReducer,
    // ... other reducers
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;