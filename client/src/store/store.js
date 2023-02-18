import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatSlice'
import userReducer from './userSlicer'

export const store = configureStore({
  reducer: {
      chat: chatReducer,
      user: userReducer
  },
})