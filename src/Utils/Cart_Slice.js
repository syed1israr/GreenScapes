import { createSlice } from "@reduxjs/toolkit";
const Cart_slice=createSlice({
    name : "Cart",
    initialState:{
        items: [],
    },
    reducers :{
        additems:(state,action) =>{
            state.items.push(action.payload);
        },
        clearcart: (state,action) =>{
            return{
                items :[]
            }
        },
    },
});
export const {additems, clearcart}=Cart_slice.actions;
export default Cart_slice.reducer;