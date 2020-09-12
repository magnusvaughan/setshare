import React, { useContext } from 'react';
import Login from './Login'
import Home from './Home'
import Test from './Test'
import UserSets from './UserSets'
import PrivateRoute from './PrivateRoute'
import CreateSet from './CreateSet'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory
} from "react-router-dom";
import { AuthContext } from './context/AuthContext'


function AuthenticatedApp() {
    console.log('authenticated app')
    const authContext = useContext(AuthContext)
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('userData');
        authContext.setAuthState( 
            {
                authenticated: false,
                userInfo:{}
            }
        )
    }

    return (
        <div>
        <Router>
            <nav className="bg-indigo-500">
                <div className="md:w-1/2 md:mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex">
                                    <div>
                                        <NavLink exact={true} to="/" activeClassName="bg-indigo-700" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out">Home</NavLink>
                                        <NavLink to="/sets" activeClassName="bg-indigo-700" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out">All sets</NavLink>
                                        <NavLink to="/test" activeClassName="bg-indigo-700" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out">Test</NavLink>
                                        <button onClick={logout} className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/test">
                    <Test />
                </Route>
                <Route path="/sets" >
                    <UserSets />
                </Route>
                <Route path="/createset">
                    <CreateSet />
                </Route>
            </Switch>
        </Router>
    </div>
    )
}

export default AuthenticatedApp;