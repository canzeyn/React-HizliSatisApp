import { configureStore } from "@reduxjs/toolkit";
import urunSlice from "./urunlerSlice";

const store = configureStore({
    reducer: {
        urunler: urunSlice
    },
});

export default store;