import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
    filter: '',
} ;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INIT_STATE,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload
    },
  }
})
export const { filterContact } = contactsSlice.actions
export default contactsSlice;