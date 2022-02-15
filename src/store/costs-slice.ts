import { createSlice } from "@reduxjs/toolkit";
import Cost from "../models/Cost";

const initialState: Cost[] = []

const CostsSlice = createSlice({
    name: 'costs',
    initialState,
    reducers: {
        add(state, action){
            state.unshift(action.payload)
        },
        remove(state, action){
            const i = state.findIndex(a => a.id === action.payload)
            state.splice(i,1)
        },
    }
})

export const costsActions = CostsSlice.actions

export default CostsSlice.reducer