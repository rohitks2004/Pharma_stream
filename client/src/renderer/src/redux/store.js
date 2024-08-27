import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        // itemSlice:itemSlice,
        userSlice:userSlice,
        // cart:cartSlice,
        // orderSlcie:orderSlice
    }
})

export default store;