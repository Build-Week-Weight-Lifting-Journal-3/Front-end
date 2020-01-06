import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isFetching: false
}

const Login = (props) => {
    const [credentials, setCredentials] = useState(initialFormState);

    const login = (event) => {
        event.preventDefault();
        setCredentials({
          isFetching: true
        })
        axiosWithAuth()
          .post('/auth/login', credentials)
          .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/journal');
          })
          .catch(err => {
            console.log(err);
          })
      }
    
      const handleChange = (event) => {
        event.preventDefault();
        setCredentials({
          ...credentials,
          [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <form onSubmit={login}>
                <input
                    name='firstName'
                    type='text'
                    placeholder="First Name"
                    value={credentials.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    name='lastName'
                    type='text'
                    placeholder="Last Name"
                    value={credentials.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    name='email'
                    type='text'
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name='password'
                    type='password'
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button>Log in</button>
                {credentials.isFetching && 'logging in'}
            </form>
        </div>
    )
}

export default Login;