import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import Sets from './Sets'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Index() {
    return (

        <div>

            <Router>
                <nav class="bg-indigo-500">
                    <div class="md:w-1/2 md:mx-auto">
                        <div class="relative flex items-center justify-between h-16">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                    <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="hidden sm:block sm:ml-6">
                                    <div class="flex">
                                        <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</Link>
                                        <Link to="/sets" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">All sets</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:hidden">
                        <div class="px-2 pt-2 pb-3">
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</a>
                            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">All sets</a>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/sets">
                        <Sets />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
