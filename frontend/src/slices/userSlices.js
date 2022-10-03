/* eslint-disable no-param-reassign */

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import routes from '../routes.js';

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (data) => {
    const response = await axios.post(routes.loginPath(), data);
    return response.data;
  },
);

const initialState = {
  token: '',
  username: '',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      localStorage.removeItem('authUser');
      state.token = '';
      state.username = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const { token, username } = action.payload;
        localStorage.setItem('authUser', { token, username });
        state = {
          ...state, token, username, error: null,
        };
      });
  },
});

export const { action } = userSlice;
export default userSlice.reducer;
