import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/shop'

export const store = configureStore({
  reducer: {
    shopReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch