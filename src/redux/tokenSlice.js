import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  token: '',
} ;

const tokenSlice = createSlice({
  name: 'token',
  initialState: INIT_STATE,
  reducers: {
    addToken(state, action) {
      state.token = action.payload
    },
    deleteToken(state, action) {
        state = '';
      },
  }
})
export const { addToken, deleteToken } = tokenSlice.actions
export default tokenSlice;