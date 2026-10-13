import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 1,
        })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((entry) => entry.id === id)

      if (item && Number.isFinite(quantity)) {
        item.quantity = Math.max(1, Math.floor(quantity))
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer