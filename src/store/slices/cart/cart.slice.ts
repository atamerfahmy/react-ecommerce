import { createSlice } from "@reduxjs/toolkit";

type State = ICart;
interface ICart {
  value: ICartItems[];
}

interface ICartItems {
  productId: number;
  quantity: number;
}

const initialState: State = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState as State,
  reducers: {
    addToCart: (state, action) => {
      state.value.push({ ...action.payload });
    },
    removeFromCart: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    setCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
