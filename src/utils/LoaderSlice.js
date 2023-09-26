import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name:'loader',
    initialState:{
        showLoader:false
    },
    reducers:{
        loaderVisibility: (state,action) =>{
            const { loading } = action.payload
            state.showLoader = loading
        }
    }

})

export const { loaderVisibility } = loaderSlice.actions;

export default loaderSlice.reducer;