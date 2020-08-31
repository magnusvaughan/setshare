import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'
import Home from './Home'
import UserSets from './UserSets'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Index extends React.Component {
    render() {

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
                                            <Link to="/login" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</Link>
                                            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</Link>
                                            <Link to="/sets" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">All sets</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="hidden sm:hidden">
                            <div className="px-2 pt-2 pb-3">
                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</a>
                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</a>
                                <a href="#" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">All sets</a>
                            </div>
                        </div>
                    </nav>
    
                    <Switch>
                    <Route path="/sets">
                            <UserSets />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
    
        );

    }

}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
