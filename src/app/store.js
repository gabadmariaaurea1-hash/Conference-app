import { configureStore } from '@reduxjs/toolkit';
import venueReducer from '../features/venueSlice';
import addOnsReducer from '../features/addOnsSlice';
import mealsReducer from '../features/mealsSlice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    addOns: addOnsReducer,
    meals: mealsReducer,
  },
});