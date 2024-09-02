import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [
    {
      name: 'Cardiology',
      medicines: ['Aspirin', 'Beta Blocker', 'Nitroglycerin'],
    },
    {
      name: 'Neurology',
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
