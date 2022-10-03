/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentChannelId: 1,
};

const UISlice = createSlice({
  name: 'UIState',
  initialState,
  reducers: {
    setCurrentChannelId(state, { payload }) {
      const { currentChannelId } = payload;
      state.currentChannelId = currentChannelId;
    },
  },
});

export const { actions } = UISlice;
export default UISlice.reducer;
