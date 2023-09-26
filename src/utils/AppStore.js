import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlices";
import gptReducer from "./GptSlice";
import configReducer from "./ConfigSlice";
import loaderReducer from "./LoaderSlice"


const AppStore = configureStore({
    reducer:{
        user : userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
        loader:loaderReducer
    }
})

export default AppStore;