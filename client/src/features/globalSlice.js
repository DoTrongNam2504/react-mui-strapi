import {createSlice} from '@reduxjs/toolkit';

const initState = {
    mode: "dark", 
}; 

export const globalSlice = createSlice({
    name: 'global',
    initialState: initState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark": "light";
        }
    }
})
export default globalSlice;

export const {setMode} = globalSlice.actions;
