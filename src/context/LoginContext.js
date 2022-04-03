import React, { createContext, useState } from 'react';

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const value = { isLoggedIn, loginHandle };

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
