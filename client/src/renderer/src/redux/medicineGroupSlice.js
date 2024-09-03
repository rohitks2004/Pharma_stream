import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [
    {
      name: 'M01AB',
      medicines: ['Aspirin', 'Beta Blocker', 'Nitroglycerin'],
    },
    {
      name: 'M01AE',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
    {
      name: 'N02BA',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
    {
      name: 'N02BE',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
    {
      name: 'N05B',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
    {
      name: 'N05C',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
    {
      name: 'R03',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
    {
      name: 'R06',
      medicines: ['Gabapentin', 'Carbamazepine', 'Topiramate'],
    },
  ],
};

const medicineGroupSlice = createSlice({
  name: 'medicineGroups',
  initialState,
  reducers: {
    addMedicineGroup: (state, action) => {
      const { name, quantity } = action.payload;
      state.groups.push({
        name: name,
        medicines: new Array(Number(quantity)).fill(''),
      });
    },
    deleteMedicineGroup: (state, action) => {
      state.groups = state.groups.filter(
        (group) => group.name.toLowerCase() !== action.payload.toLowerCase()
      );
    },
  },
});

export const { addMedicineGroup, deleteMedicineGroup } = medicineGroupSlice.actions;
export default medicineGroupSlice.reducer;
