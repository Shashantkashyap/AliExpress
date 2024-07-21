import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartLength : 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        setCartLength :(state, action)=>{
            state.cartLength = action.payload
        }
    }
})

export const {setCartLength} = cartSlice.actions;
export default cartSlice.reducer ;