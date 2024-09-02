import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  medicines: [],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addstate:(state,action)=>{
      state.medicines = action.payload;
    },
    addMedicine:async (state, action) => {
      state.medicines.push({
        ...action.payload,
        cost: parseFloat(action.payload.cost),
        quantity: parseInt(action.payload.quantity, 10),
      });
      try{
        const res = await axios.post(
          "http://localhost:8800/api/hinventory/add",
          action.payload
        )
        console.log(res)
      }catch(e){
        console.log(e);
      }
    },
    deleteMedicine: async (state, action) => {
      state.medicines = state.medicines.filter(
        (medicine) =>
          medicine.medicineId !== action.payload
      );
      try{
        console.log(action.payload)
        const res = await axios.delete(
          "http://localhost:8800/api/hinventory/delete/"+action.payload
        )
        console.log(res.data)
      }catch(e){
        console.log(e);
      }
    },
  },
});

export const { addMedicine, deleteMedicine,addstate } = inventorySlice.actions;
export default inventorySlice.reducer;
