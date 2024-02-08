import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Cart_Slice";


const Appstore=configureStore({
    reducer :{
        cart:cartreducer,
        
    }
});

export default Appstore;