import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { Card } from '../../models'

type CardSearchState = {
  collection?: Card[]
  loading: boolean
  error: boolean
}

const initialState: CardSearchState = {
  loading: false,
  error: false
}

export const cardSearchSlice = createSlice({
  name: 'cardSearch',
  initialState,
  reducers: {
    loadRequest: state => {
      state.loading = true
      state.error = false
    },
    loadSuccess: (state, action: PayloadAction<Card[]>) => {
      state.loading = false
      state.error = false
      state.collection = action.payload
    },
    loadFailure: state => {
      state.collection = undefined
      state.loading = false
      state.error = true
    },
  }
})

export const { loadRequest, loadSuccess, loadFailure } = cardSearchSlice.actions

export const selectCards = (state: RootState) => state.cardSearch.collection

export default cardSearchSlice.reducer
