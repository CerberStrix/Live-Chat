import React, { useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import routes from '../routes.js';
import { actions as channelsActions, selectors as channelsSelectors } from '../slices/channelsSlice.js';
import { actions as messagesActions, selectors as messagesSelectors } from '../slices/messagesSlice.js';
import { actions as UIActions } from '../slices/UISlice.js';
import Channels from './Channels.jsx';
import Chat from './Chat.jsx';

const getAuthHeader = () => {
  const token = localStorage.getItem('userAuth');

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelsState = useSelector(channelsSelectors.selectAll);
  const messagesState = useSelector(messagesSelectors.selectAll);
  const currentChannel = useSelector((state) => state.currentUI.currentChannelId);
  console.log(channelsState);
  console.log(messagesState);
  console.log(currentChannel);
  useEffect(() => {
    const data = getAuthHeader();
    const fetchData = async () => {
      const response = await axios.get(routes.dataPath(), { headers: data });
      const { channels, currentChannelId, messages } = response.data;
      dispatch(channelsActions.addChannels(channels));
      dispatch(messagesActions.addMessages(messages));
      dispatch(UIActions.setCurrentChannelId({ currentChannelId }));
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container className="my-4 h-100 shadow">
      <Row className="h-100 flex-md-row">
        <Col sm={4} md={2} className="px-2 pt-5 bg-light border-end">
          <div className="d-flex justify-content-between mb-2 ps-3 pe-2">
            <span>{t('channels')}</span>
            <button className="p-0 text-primary btn btn-group-vertical" type="button">
              <ion-icon size="small" name="add-outline" />
              <span className="visually-hidden">+</span>
            </button>
          </div>
          <Channels />
        </Col>
        <Col className="px-0">
          <Chat />
        </Col>
      </Row>

    </Container>
  );
};

export default Home;
