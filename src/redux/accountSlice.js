import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => { 
      state = action.payload;
      return state;
    }
  }
});

export const {setAccount} = accountSlice.actions

export default accountSlice.reducer