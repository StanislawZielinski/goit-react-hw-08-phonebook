import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  isLogged: false,
} ;

const isLoggedSlice = createSlice({
  name: 'isLogged',
  initialState: INIT_STATE,
  reducers: {
    logIn(state, action) {
      state.isLogged = action.payload
    },
  }
})
export const { logIn } = isLoggedSlice.actions
export default isLoggedSlice;