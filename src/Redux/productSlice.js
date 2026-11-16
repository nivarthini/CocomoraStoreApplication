import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlist: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const existingProduct = state.wishlist.find(
                (item) => item.id === action.payload.id
            );

            if (!existingProduct) {
                state.wishlist.push(action.payload);
            }
        },

        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload
            );
        },

        clearWishlist: (state) => {
            state.wishlist = [];
        }
    }
});

export const { addToWishlist,removeFromWishlist, clearWishlist} = productSlice.actions;

export default productSlice.reducer;
