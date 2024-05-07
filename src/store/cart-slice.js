import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemTocart(state, action) {
            const newItem = action.payload;
            const exisTingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!exisTingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            } else {
                exisTingItem.quantity++;
                exisTingItem.totalPrice = exisTingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state,action) {
            const id = action.payload;
            const exisTingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(exisTingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                exisTingItem.quantity--;
            }
        }
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;