import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchLogin } from '../slices/userSlices';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  console.log(userState);
  const handle = () => {
    dispatch(fetchLogin({ username: 'admin', password: 'admin' }));
  };

  return (
    <div>
      <h1>This is Home</h1>
      <h2>{t('join')}</h2>
      <Button variant="info" onClick={() => handle()}>Info</Button>
    </div>
  );
};

export default Home;
