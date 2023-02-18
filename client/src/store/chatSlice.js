import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    message: (state, action) => {
        console.log("DISPATCH")
        state.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { message } = chatSlice.actions

export default chatSlice.reducer