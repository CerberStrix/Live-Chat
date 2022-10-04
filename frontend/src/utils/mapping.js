const authMapping = {
  401: (authData, logIn, setFeedback) => {
    setFeedback(true);
  },
  200: (authData, logIn, setFeedback, navigate) => {
    setFeedback(false);
    logIn();
    const { data } = authData;
    localStorage.setItem('userAuth', data.token);
    navigate('/', { replace: true });
  },
};

export default authMapping;
