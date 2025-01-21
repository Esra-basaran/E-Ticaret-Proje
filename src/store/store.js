import { configureStore } from "@reduxjs/toolkit";
import SepetWomenSlice from './sepetWomenSlice';

const store = configureStore({
    reducer:{
        womenShoppingBasket: SepetWomenSlice,
    }
})
export default store;