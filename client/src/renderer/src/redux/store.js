import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import inventorySlice from "./inventorySlice";

const store = configureStore({
    reducer: {
        // itemSlice:itemSlice,
        userSlice:userSlice,
        // cart:cartSlice,
        // orderSlcie:orderSlice
        inventory:inventorySlice,
    }
})

export default store;