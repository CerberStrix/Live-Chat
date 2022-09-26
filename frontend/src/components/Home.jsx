import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>This is Home</h1>
      <h2>{t('join')}</h2>
    </div>
  );
};

export default Home;
