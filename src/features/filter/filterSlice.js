import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: "All",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});



export const getSelectedCategory = (state) => state.filter.selectedCategory;

export const { filterCategory } = filterSlice.actions;

export default filterSlice.reducer;