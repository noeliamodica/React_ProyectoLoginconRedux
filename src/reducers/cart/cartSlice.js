import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    productsList: [],
  }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
        state.productsList = [...state.productsList, action.payload];
        state.totalCount += 1;
    }
   },
})

// Action creators are generated for each case reducer function
export const { setUser } = cartSlice.actions

export default cartSlice.reducer