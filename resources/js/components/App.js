import React, { useContext } from 'react'
import axios from 'axios';
import { AuthContext } from './context/AuthContext'

import AuthenticatedApp from './Authenticated-App.js'
import UnAuthenticatedApp from './Unauthenticated-App.js'

axios.defaults.baseURL = 'http://setshare.test'

function App() {
    const authContext = useContext(AuthContext)
    if (authContext.authState.authenticated == 'false' || authContext.authState.authenticated == false) {
        return <UnAuthenticatedApp />
    } else {
        return <AuthenticatedApp />
    }
}

export default App;