import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { 
    name: 'Conference Room (Capacity:15)', 
    cost: 1500, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Auditorium Hall (Capacity:200)', 
    cost: 5500, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Presentation Room (Capacity:50)', 
    cost: 3500, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Large Meeting Room (Capacity:10)', 
    cost: 1000, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80'
  },
  { 
    name: 'Small Meeting Room (Capacity:5)', 
    cost: 800, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=500&q=80'
  },
];

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) item.quantity -= 1;
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;