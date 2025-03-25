import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const itemInWishlist = state.wishlist.find(item => item.id === action.payload.id);
            if (!itemInWishlist) {
                state.wishlist.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;