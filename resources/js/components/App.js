import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

import AuthenticatedApp from './Authenticated-App.js'
import UnAuthenticatedApp from './Unauthenticated-App.js'

function App() {
  const authContext = useContext(AuthContext)
  console.log('Global auth state', authContext.authState.authenticated, Boolean(authContext.authState.authenticated))
  if(authContext.authState.authenticated == 'false' || authContext.authState.authenticated == false) {
      return <UnAuthenticatedApp />
  } else {
    return <AuthenticatedApp />
  }
}

export default App;