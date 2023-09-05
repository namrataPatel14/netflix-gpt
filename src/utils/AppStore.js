import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";


const AppStore = configureStore({
    reducer:{
        user : userReducer,
    }
})

export default AppStore;