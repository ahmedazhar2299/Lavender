import { configureStore } from '@reduxjs/toolkit'
import fetchUserReducer from '../reducers/fetchUser'
import fetchItemReducer from '../reducers/fetchItem'
import fetchTotalReducer from '../reducers/fetchTotal'
import fetchAddressReducer from '../reducers/fetchAddress'
export const store = configureStore({
  reducer: {
    fetchUser : fetchUserReducer,
    fetchItem : fetchItemReducer,
    fetchTotal : fetchTotalReducer,
    fetchAddress : fetchAddressReducer
  },
})