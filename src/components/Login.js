import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isFetching: false
}

const Login = () => {
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
            // localStorage.setItem('token', res.data.payload);
            // props.history.push('/colors');
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
                    type='text'
                    name='email'
                    placeholder='email'
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
                {credentials.isFetching && 'logging in'}
            </form>
        </div>
    )
}

export default Login;