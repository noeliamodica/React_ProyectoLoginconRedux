import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    fullname: "",
    token: "",
  }

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
        state.email = action.payload.email;
        state.fullname = action.payload.fullname;
        state.token = action.payload.token;
    }
   },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer