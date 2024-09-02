import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/api/products";

interface CartSate {
    cart: Product[],
    cartTotalQuantity: number,
    cartTotalAmount: number,   
    cartQuantity: number
}

const initialState: CartSate ={
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount:0,
    cartQuantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
    }
  }
)

export const { } = cartSlice.actions;
export default cartSlice.reducer;
