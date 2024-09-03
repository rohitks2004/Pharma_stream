import { createSlice } from "@reduxjs/toolkit";
const usertoken = localStorage.getItem('usertoken');
const usertype = localStorage.getItem('usertype');
const userSlice = createSlice({
    name:"userToken",
    initialState:{
        user:
            (usertoken && usertype) ?
            {
           "userType": localStorage.getItem("usertype"),
            "token": localStorage.getItem("usertoken")
            } :
            null
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
            localStorage.setItem("usertoken",action.payload.token);
            localStorage.setItem("usertype",action.payload.userType);
        },
        logout:(state)=>{
            state.user = null;
            localStorage.clear();
        }
    }
})

export default userSlice.reducer;
export const {login,logout} = userSlice.actions;


// {
//     "userType": "superAdmin",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0QG1haWwuY29tIiwidXNlclR5cGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzI0NzY5ODE3LCJleHAiOjE3MjQ4NTYyMTd9.h2i_As8cxQliG8jxF613-oxkEJsjdF0fmuHtgoHLIt4"
// }