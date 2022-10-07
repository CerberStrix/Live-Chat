import React, {
  createContext, useState, useMemo, useCallback,
} from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const userAuth = JSON.parse(localStorage.getItem('userAuth'));
  const initialState = (userAuth && userAuth.token);

  const [loggedIn, setLoggedIn] = useState(initialState);

  const logIn = useCallback(() => setLoggedIn(true), []);
  const logOut = useCallback(() => {
    localStorage.removeItem('userAuth');
    setLoggedIn(false);
  }, []);

  const getAuthHeader = () => {
    if (userAuth && userAuth.token) {
      return { Authorization: `Bearer ${userAuth.token}` };
    }
    return {};
  };

  const getUsername = () => userAuth.username;

  const authValue = useMemo(() => ({
    logIn, logOut, loggedIn, getAuthHeader, getUsername,
  }), [loggedIn, logIn, logOut, getUsername]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
