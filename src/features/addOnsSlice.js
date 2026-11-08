import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    name: 'Projectors', 
    cost: 200, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Speaker', 
    cost: 35, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Microphones', 
    cost: 45, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Whiteboards', 
    cost: 80, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Signage', 
    cost: 80, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80'
  },
];

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState,
  reducers: {
    incrementAddOn: (state, action) => {
      const item = state[action.payload];
      if (item) item.quantity += 1;
    },
    decrementAddOn: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) item.quantity -= 1;
    },
  },
});

export const { incrementAddOn, decrementAddOn } = addOnsSlice.actions;
export default addOnsSlice.reducer;