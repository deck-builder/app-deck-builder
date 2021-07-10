import { configureStore } from '@reduxjs/toolkit'

import cardSearch from './slices/cardSearch'

const store = configureStore({
  reducer: {
    cardSearch
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
