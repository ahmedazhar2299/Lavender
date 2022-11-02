import { configureStore } from '@reduxjs/toolkit'
import fetchUserReducer from '../reducers/fetchUser'

export const store = configureStore({
  reducer: {
    fetchUser : fetchUserReducer
  },
})