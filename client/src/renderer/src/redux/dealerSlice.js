import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dealers: [
    {
      name: 'John Doe',
      enterpriseName: 'John Enterprises',
      emailId: 'john@example.com',
      phoneNumber: '123-456-7890',
      address: '123 Main St, New York, NY',
    },
    {
      name: 'Jane Smith',
      enterpriseName: 'Smith LLC',
      emailId: 'jane@example.com',
      phoneNumber: '987-654-3210',
      address: '456 Elm St, Los Angeles, CA',
    },
  ],
};

const dealerSlice = createSlice({
  name: 'dealers',
  initialState,
  reducers: {
    addDealer: (state, action) => {
      state.dealers.push(action.payload);
    },
    deleteDealer: (state, action) => {
      state.dealers = state.dealers.filter(
        (dealer) => dealer.name.toLowerCase() !== action.payload.toLowerCase()
      );
    },
  },
});

export const { addDealer, deleteDealer } = dealerSlice.actions;
export default dealerSlice.reducer;
