import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userToken",
    initialState:{
        // user:{
        //     "userType": "superAdmin",
        //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0QG1haWwuY29tIiwidXNlclR5cGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzI0NzY5ODE3LCJleHAiOjE3MjQ4NTYyMTd9.h2i_As8cxQliG8jxF613-oxkEJsjdF0fmuHtgoHLIt4"
        // }
        user:null,
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user = null;
        }
    }
})

export default userSlice.reducer;
export const {login,logout} = userSlice.actions;


// {
//     "userType": "superAdmin",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0QG1haWwuY29tIiwidXNlclR5cGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzI0NzY5ODE3LCJleHAiOjE3MjQ4NTYyMTd9.h2i_As8cxQliG8jxF613-oxkEJsjdF0fmuHtgoHLIt4"
// }