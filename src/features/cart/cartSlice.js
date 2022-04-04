import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({
                id: nanoid(),
                image: action.payload.image,
                title: action.payload.title,
                price: action.payload.price,
                category: action.payload.category,
            })
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        }
    }
});

export const getCartItems = state => state.cart.cartItems;

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
