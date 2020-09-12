import React from 'react';

import { useAuth } from './context/AuthContext'
import Login from './Login'


function UnAuthenticatedApp() {
    console.log('unauthenticated')
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
        <h1>You are not logged in.</h1>
    );
}

export default UnAuthenticatedApp;