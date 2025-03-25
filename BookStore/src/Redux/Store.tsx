import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartReducer";
import wishlistReducer from "./WishlistReducer";
import customerReducer from "./CustomerReducer";

export default configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        customer: customerReducer,
    },
})