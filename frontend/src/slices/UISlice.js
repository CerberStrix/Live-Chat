/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { actions as channelsActions } from './channelsSlice.js';

const initialState = {
  currentChannelId: 1,
  modalType: null,
  showModal: false,
  targetChannel: {},
};

const UISlice = createSlice({
  name: 'UIState',
  initialState,
  reducers: {
    setCurrentChannelId(state, { payload }) {
      const { currentChannelId } = payload;
      state.currentChannelId = currentChannelId;
    },
    hideModal(state) {
      state.showModal = false;
    },
    showModal(state, { payload }) {
      const { modalType } = payload;
      state.modalType = modalType;
      state.showModal = true;
    },
    setTarget(state, { payload }) {
      const { channel } = payload;
      state.targetChannel = channel;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(channelsActions.removeChannel, (state, action) => {
      if (state.currentChannelId === action.payload) {
        state.currentChannelId = 1;
      }
    });
  },
});

export const { actions } = UISlice;
export default UISlice.reducer;
