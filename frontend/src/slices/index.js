import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';
import UIReducer from './UISlice';

export default configureStore({
  reducer: {
    data: dataSlice,
    channels: channelsReducer,
    messages: messagesReducer,
    currentUI: UIReducer,
  },
});
