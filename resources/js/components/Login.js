import React from 'react';
import axios from 'axios';
import {
    useHistory,
    useLocation
} from "react-router-dom";

axios.defaults.baseURL = 'http://setshare.test'

const Login = (props) => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log('from', from)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                console.log('CSRF response', response);
                axios.post('/login', {
                    email: email,
                    password: password
                }).then(response => {
                    console.log(response.status)
                    if (response.status === 200 || response.status === 204) {
                        props.login();
                        history.replace(from);
                    }
                })
            });
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-8">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="form-group row">
                                    <label for="email" className="col-md-4 col-form-label text-md-right">Email</label>

                                    <div className="col-md-6">
                                        <input className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                            autofocus
                                        />

                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="email" className="col-md-4 col-form-label text-md-right">Email</label>

                                    <div className="col-md-6">
                                        <input className="form-control"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />

                                    </div>
                                </div>
                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;