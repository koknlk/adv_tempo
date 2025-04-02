import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const username = process.env.REACT_APP_UZRXYT;
const password = process.env.REACT_APP_OUTLDC;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCredentials = localStorage.getItem('credentials');
    if (savedCredentials) {
      const { username, password, expiry } = JSON.parse(savedCredentials);
      const currentTime = new Date().getTime();
      if (currentTime < expiry) {
        auth(username, password);
      }
    }
  }, []);


  const auth = (enteredUsername, enteredPassword) => {

    if (enteredUsername === username && enteredPassword === password) {

      const expiry = new Date().getTime() + 8 * 60 * 60 * 1000; // 8 hours in milliseconds
      const credentials = {
        username: enteredUsername,
        password: enteredPassword,
        expiry,
      };
      localStorage.setItem('credentials', JSON.stringify(credentials));
      setAuthenticated(true);
      navigate('/dashboard');
    } else {
      
      setAuthenticated(false);
    }
  };
  

  const deAuth = () => {
    localStorage.removeItem('credentials');
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, auth, deAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
