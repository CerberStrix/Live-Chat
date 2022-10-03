import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import NewMessages from './NewMessages';
import { selectors as channelsSelectors } from '../slices/channelsSlice.js';

const Chat = () => {
  const { t } = useTranslation();
  const curChanId = useSelector((state) => state.currentUI.currentChannelId);
  const currendChannel = useSelector((state) => channelsSelectors.selectById(state, curChanId));

  if (!currendChannel) {
    return null;
  }
  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b>
            #
            {currendChannel.name}
          </b>
        </p>
        <span className="text-muted">
          {' '}
          0
          {' '}
          {t('message_count')}
        </span>
      </div>
      <NewMessages />
    </div>
  );
};

export default Chat;
