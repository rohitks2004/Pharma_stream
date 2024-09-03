import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import inventorySlice from "./inventorySlice";
import medicineGroupSlice from "./medicineGroupSlice";
import dealerSlice from './dealerSlice';

const store = configureStore({
    reducer: {
        // itemSlice:itemSlice,
        userSlice:userSlice,
        // cart:cartSlice,
        // orderSlcie:orderSlice
        inventory:inventorySlice,
        medicineGroup:medicineGroupSlice,
        dealer: dealerSlice,

    }
})

export default store;