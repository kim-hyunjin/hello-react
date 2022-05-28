import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // dummy function for better IDE auto complition
});

export default AuthContext;
