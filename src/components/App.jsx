import React, { useReducer, useEffect } from 'react';
import { AppRouter } from '../router/AppRouter';

import { AuthContext } from '../auth/AuthContext'
import { authReducer } from '../auth/authReducer'

import '../styles/components/App.css';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


const App = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)


  useEffect(() => {
    localStorage.setItem( 'user', JSON.stringify(user));
  }, [user])
  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
