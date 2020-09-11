import React from 'react';

import {useAuth} from './context/auth-context'


function UnAuthenticatedApp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {login} = useAuth();


    return (
        <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm">
                <div class="flex flex-col break-words bg-white border-2 rounded shadow-md  mt-6">

                        <div className="font-semibold bg-indigo-500 text-white py-3 px-6 mb-0">Login</div>

                            <form className="w-full p-6" onSubmit={login}>

                                <div className="flex flex-wrap mb-6">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>


                                    <input className="form-input w-full shadow py-2 px-3"
                                        type="email"
                                        name="email"
                                        placeholder=""
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        autoocus
                                    />


                                </div>

                                <div className="flex flex-wrap mb-6">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <input className="form-input w-full shadow py-2 px-3"
                                        type="password"
                                        name="password"
                                        placeholder=""
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group row mb-0">
                                    <div className="flex flex-wrap items-center">
                                        <button type="submit" className="bg-indigo-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Login
                                        </button>

                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnAuthenticatedApp;