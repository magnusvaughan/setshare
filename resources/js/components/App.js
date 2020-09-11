import React from 'react'
import {useUser} from './context/user-context'

import AuthenticatedApp from './Authenticated-App.js'
import UnauthenticatedApp from './Unauthenticated-App.js'

function App() {
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;