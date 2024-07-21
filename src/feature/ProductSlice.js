import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productId : null
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        setProductId : (state,action) =>{
            state.productId = action.payload;
        }
    }
})

export const {setProductId}= ProductSlice.actions;
export default ProductSlice.reducer