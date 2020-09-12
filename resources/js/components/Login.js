import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext'

axios.defaults.baseURL = 'http://setshare.test'

const Login = () => {
    console.log('Login')
    const authContext = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        console.log('This is working')
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                console.log('CSRF response', response);
                axios.post('/login', {
                    email: email,
                    password: password
                }).then(response => {
                    console.log('Login post response', response)
                    if (response.status === 200 || response.status === 204) {
                        axios.get('/api/user')
                            .then(response => {
                                console.log('This is the response from the user get', response);
                                const { name, email } = response.data;
                                authContext.setAuthState({
                                    authenticated: true,
                                    userInfo:{
                                        'name': name, 
                                        'email': email
                                    }
                                })
                            })
                    }
                })
            });
    }
    return (
        <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-sm">
                <div className="flex flex-col break-words bg-white border-2 rounded shadow-md  mt-6">

                        <div className="font-semibold bg-indigo-500 text-white py-3 px-6 mb-0">Login</div>

                            <form className="w-full p-6">

                                <div className="flex flex-wrap mb-6">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>


                                    <input className="form-input w-full shadow py-2 px-3"
                                        type="email"
                                        name="email"
                                        placeholder=""
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        autoFocus
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
                                        <button onClick={handleSubmit} type="submit" className="bg-indigo-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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

export default Login;