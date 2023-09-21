import { createSlice } from "@reduxjs/toolkit";

//? Creating cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];

      //? We can either mutate the state or replace it by returning new value
      //   return {items : []}
    },
  },
});

// console.log(cartSlice, "cartSlice");
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
