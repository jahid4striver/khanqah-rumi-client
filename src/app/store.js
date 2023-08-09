import { configureStore } from "@reduxjs/toolkit";
import boyanSlice from "../features/boyanSlice.js/boyanSlice";


const store= configureStore({
    reducer:{
         boyan: boyanSlice,
    }
});

export default store;