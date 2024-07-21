import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    overlay : false
}

const overlaySlice = createSlice({
    name: "overlay",
    initialState,
    reducers:{
        setOverlay : (state, action)=>{
            state.overlay = action.payload
        }
    }
})
export const {setOverlay} = overlaySlice.actions;
export default overlaySlice.reducer