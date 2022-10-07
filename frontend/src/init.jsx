import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import resources from './locales/index.js';
import App from './components/App.jsx';
import store from './slices/index.js';
import ChatApiProvider from './contexts/ChatApiProvider.jsx';

const init = (socket) => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
      debug: true,
    });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ChatApiProvider socket={socket}>
          <App />
        </ChatApiProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default init;
