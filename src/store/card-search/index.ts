import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { Card } from '../../models'

type SearchOptions = {
  name: string
}

type CardSearchState = {
  searchOptions: SearchOptions
  collection?: Card[]
  loading: boolean
  error: boolean
}

const initialState: CardSearchState = {
  searchOptions: {
    name: ''
  },
  loading: false,
  error: false
}

export const cardSearchSlice = createSlice({
  name: 'cardSearch',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<SearchOptions>) => {
      state.searchOptions = action.payload
    },
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

export const { search, loadRequest, loadSuccess, loadFailure } = cardSearchSlice.actions

export const selectCards = (state: RootState) => state.cardSearch.collection
export const selectSearchOptions = (state: RootState) => state.cardSearch.searchOptions

export default cardSearchSlice.reducer
