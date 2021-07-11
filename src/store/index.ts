import { configureStore } from '@reduxjs/toolkit' 
import createSagaMiddleware from 'redux-saga'

import cardSearch from './card-search'
import rootSaga from './root-sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    cardSearch
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
