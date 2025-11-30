import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartReduxStoreSlice";

const appReduxStore = configureStore({
    reducer : {
         cart : cartReducer,
    },
})

export default appReduxStore;