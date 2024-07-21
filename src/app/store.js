import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../feature/CategorySlice"
import productReducer from "../feature/ProductSlice"
import cartLengthReducer from "../feature/CartlengthSlice"
import overlayReducer from "../feature/OverlaySlice"

export const store = configureStore({
    reducer:{
        category: categoryReducer,
        product : productReducer,
        cart : cartLengthReducer,
        overlay : overlayReducer
    }
})