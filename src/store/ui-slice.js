import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const uiAction = uislice.actions;

export default uislice.reducer;