import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  email: '',
  password: '',
} ;

const userSlice = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {
    addUser(state, action) {
      state.email = action.payload;
      state.password = action.payload
    },
  }
})
export const { addUser } = userSlice.actions
export default userSlice;