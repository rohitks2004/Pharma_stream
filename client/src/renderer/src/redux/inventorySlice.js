// inventorySlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state with some default medicines
const initialState = {
  medicines: [
    {
      _id: { $oid: '66ceb1391ec34240651046b5' },
      medicineId: '2',
      name: 'Sildenafil 50mg',
      arrivalDate: { $date: '2024-08-01T00:00:00.000Z' },
      expiryDate: { $date: '2025-08-01T00:00:00.000Z' },
      dealerId: { $oid: '64f1e8e4d1b1c23b5f7f6a34' },
      cost: 18.02,
      quantity: 379,
      criticalValue: 35,
    },
    {
      _id: { $oid: '66ceb1e91ec34240651046b8' },
      medicineId: '1',
      name: 'Blood Pressure Med',
      arrivalDate: { $date: '2024-08-01T00:00:00.000Z' },
      expiryDate: { $date: '2025-08-01T00:00:00.000Z' },
      dealerId: { $oid: '64f1e8e4d1b1c23b5f7f6a34' },
      cost: 23.99,
      quantity: 172,
      criticalValue: 50,
    },
  ],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addMedicine: (state, action) => {
      // Add new medicine to the inventory
      state.medicines.push({
        ...action.payload,
        cost: parseFloat(action.payload.cost),
        quantity: parseInt(action.payload.quantity, 10),
      });
    },
    deleteMedicine: (state, action) => {
      // Delete a medicine by name or medicineId
      state.medicines = state.medicines.filter(
        (medicine) =>
          medicine.name.toLowerCase() !== action.payload.toLowerCase() &&
          medicine.medicineId !== action.payload
      );
    },
  },
});

// Export actions and reducer
export const { addMedicine, deleteMedicine } = inventorySlice.actions;
export default inventorySlice.reducer;
