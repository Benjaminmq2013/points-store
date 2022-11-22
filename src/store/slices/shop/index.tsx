import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { T } from '../../../interface'

export interface shopState {
  products:T.products[],
  user: T.user
  loading: boolean,
}

const initialState: shopState = {
  products: [],
  user: {} as T.user,
  loading: false
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    
    setProducts: (state, action: PayloadAction<T.products[]>) => {
      state.products = action.payload
    },
    setUser: (state, action: PayloadAction<T.user>) => {
      state.user = action.payload
    },
    setHistory: (state, action: PayloadAction<T.user>) => {
      state.user = action.payload
    },    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
  },
})


export const { setProducts, setUser, setHistory, setLoading } = shopSlice.actions

export default shopSlice.reducer