import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { actions as UIActions } from '../slices/UISlice.js';

const Channel = ({ channel }) => {
  const dispatch = useDispatch();
  const currentChannel = useSelector((state) => state.currentUI.currentChannelId);

  const btnClass = channel.id === currentChannel ? 'w-100 rounded-0 text-start btn btn-secondary' : 'w-100 rounded-0 text-start btn';

  const handleClick = (id) => {
    dispatch(UIActions.setCurrentChannelId({ currentChannelId: id }));
  };

  return (
    <li className="nav-item w-100">
      <button className={btnClass} style={{ boxShadow: 'none', border: 'none' }} type="button" onClick={() => handleClick(channel.id)}>
        <span className="me-1">#</span>
        {channel.name}
      </button>
    </li>
  );
};

export default Channel;
