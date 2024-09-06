import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/api/products";

interface CartSate {
  cart: Product[];
  total: number;
}

const initialState: CartSate = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartSate, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.total -= action.payload.price;
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
