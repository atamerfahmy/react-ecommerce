import { createSlice } from "@reduxjs/toolkit";

type State = IProduct;
interface IProduct {
  value: object[];
}

const initialState: State = {
  value: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState as State,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
