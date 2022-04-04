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
                quantity: 1,
            })
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            state.cartItems.find(item => item.id === action.payload.id).quantity++
        },
        decreaseQuantity: (state, action) => {
            state.cartItems.find(item => item.id === action.payload.id).quantity--
        },
    }
});

export const getTotalPrice = state =>
    state.cart.cartItems.reduce((total, cartItem) => cartItem.price * cartItem.quantity + total, 0);

export const getCartItems = state => state.cart.cartItems;

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
