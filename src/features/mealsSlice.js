import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfPeople: 1,
  options: [
    { name: 'Breakfast', cost: 50, selected: false },
    { name: 'High Tea', cost: 25, selected: false },
    { name: 'Lunch', cost: 65, selected: false },
    { name: 'Dinner', cost: 70, selected: false },
  ],
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
    toggleMealOption: (state, action) => {
      const item = state.options[action.payload];
      if (item) item.selected = !item.selected;
    },
  },
});

export const { setNumberOfPeople, toggleMealOption } = mealsSlice.actions;
export default mealsSlice.reducer;