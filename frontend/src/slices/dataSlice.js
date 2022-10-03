/* eslint-disable no-param-reassign */

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import routes from '../routes.js';

export const fetchData = createAsyncThunk(
  'user/fetchData',
  async (data) => {
    const response = await axios.get(routes.dataPath(), { headers: data });
    return response.data;
  },
);

const initialState = {
  channels: [],
  currentChannelId: '',
  messages: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const data = action.payload;
        state.channels = data.channels;
        state.currentChannelId = data.currentChannelId;
        state.messages = data.messages;
      });
  },
});

export const { action } = dataSlice;
export default dataSlice.reducer;
