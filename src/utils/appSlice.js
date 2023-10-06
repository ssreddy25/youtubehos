import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({
    name:"app",
    initialState:{
        isOpenMenu:true,
    },

    reducers:{
        toggleMenu :(state)=>{
            state.isOpenMenu =!state.isOpenMenu;
        },

        isMenuClose :(state)=>{
            state.isOpenMenu = false;
        }
    }
})

export const {toggleMenu ,isMenuClose} =appSlice.actions;
export default appSlice.reducer;