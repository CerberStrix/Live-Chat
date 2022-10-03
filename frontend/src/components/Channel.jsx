import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { actions as UIActions } from '../slices/UISlice.js';

const Channel = ({ channel }) => {
  const dispatch = useDispatch();
  const currentChannel = useSelector((state) => state.currentUI.currentChannelId);

  const btnClass = cn('w-100 rounded-0 text-start btn', {
    'btn-secondary': channel.id === currentChannel,
  });

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
