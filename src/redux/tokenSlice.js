import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = '' ;

const tokenSlice = createSlice({
  name: 'token',
  initialState: INIT_STATE,
  reducers: {
    addToken(state, action) {
      state = action.payload
    },
    deleteToken(state, action) {
        state = '';
      },
  }
})
export const { addToken, deleteToken } = tokenSlice.actions
export default tokenSlice;