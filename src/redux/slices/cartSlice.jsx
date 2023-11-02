import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalPrice: 0,
  count: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const findItem = state.cartItems.find(obj => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload, count: 1
        })
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0 )
      state.count = state.cartItems.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    removeCartItem: (state, action) => {
      const findItem = state.cartItems.find(obj => obj.id === action.payload)
      if (findItem) {
        findItem.count--;
      }
      state.count--;
      state.totalPrice -= findItem.price;
    },
    clearItem: (state, action) => {
      const findItem = state.cartItems.filter(obj => obj.id !== action.payload)
      const findItemPrice = state.cartItems.find(obj => obj.id === action.payload)
      state.cartItems = findItem;
      state.totalPrice -= findItemPrice.price * findItemPrice.count;
      state.count -= findItemPrice.count 
    },
    clearItems: (state) => {
      state.cartItems = []
      state.totalPrice = 0;
      state.count = 0;
    }
  },
})

export const { addCartItem, removeCartItem, clearItems, clearItem } = cartSlice.actions

export default cartSlice.reducer