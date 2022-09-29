import '../App.css';
import React, { useState, useMemo, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import AuthContext from '../contexts/index.jsx';
import useAuth from '../hooks/index.jsx';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import NavBar from './NavBar';

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem('userAuth');
  const [loggedIn, setLoggedIn] = useState(!!token);

  const logIn = useCallback(() => setLoggedIn(true), []);
  const logOut = useCallback(() => {
    localStorage.removeItem('userAuth');
    setLoggedIn(false);
  }, []);

  const authValue = useMemo(() => ({ logIn, logOut, loggedIn }), [loggedIn, logIn, logOut]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const App = () => (
  <AuthProvider>
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            )}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  </AuthProvider>
);

export default App;
