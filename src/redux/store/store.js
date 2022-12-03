import { configureStore } from '@reduxjs/toolkit'
import fetchUserReducer from '../reducers/fetchUser'
import fetchItemReducer from '../reducers/fetchItem'

export const store = configureStore({
  reducer: {
    fetchUser : fetchUserReducer,
    fetchItem : fetchItemReducer
  },
})