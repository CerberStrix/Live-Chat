const authMapping = {
  401: (authData, logIn, setFeedback) => {
    setFeedback(true);
  },
  200: (authData, logIn, setFeedback, navigate) => {
    setFeedback(false);
    logIn();
    const { data } = authData;
    localStorage.setItem('userAuth', JSON.stringify(data));
    navigate('/', { replace: true });
  },
  201: (authData, logIn, setFeedback, navigate) => {
    setFeedback(false);
    logIn();
    const { data } = authData;
    localStorage.setItem('userAuth', JSON.stringify(data));
    navigate('/', { replace: true });
  },
  409: (authData, logIn, setFeedback) => {
    setFeedback(true);
  },
};

export default authMapping;
