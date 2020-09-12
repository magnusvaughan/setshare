import React, { useState, createContext } from 'react'

const AuthContext = createContext()
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const authenticated = localStorage.getItem('authenticated'); 
  const userInfo = localStorage.getItem('userInfo')

  const [authState, setAuthState] = useState({
    authenticated: authenticated ? authenticated : false,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });

  const setAuthInfo = (authInfo) => {
    const {authenticated, userInfo} = authInfo;
    localStorage.setItem('authenticated', authenticated);
    localStorage.setItem(userInfo, JSON.stringify(userInfo))
    setAuthState({
      authenticated,
      userInfo
    })
  }

  return (
    <Provider 
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo)
      }}
    >
    {children}
    </ Provider>

  );
};

export { AuthContext, AuthProvider };
