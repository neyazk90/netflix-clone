import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers:
    {
        addSearchCache:(state:any, action:any)=> {
            
        }
    }
});

export const {addSearchCache} = searchSlice.actions

export default searchSlice.reducer;