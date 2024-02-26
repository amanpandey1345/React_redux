import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slice/userSliec";



const store = configureStore({
    reducer:{
        auth: AuthReducer
    }
})



export default store