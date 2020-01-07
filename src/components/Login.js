import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const Login = (props) => {
    const [credentials, setCredentials] = useState(initialFormState);

    // const login = (event) => {
    //     event.preventDefault();
    //     axiosWithAuth()
    //       .post('/auth/login', credentials)
    //       .then(res => {
    //         console.log(res);
    //         localStorage.setItem('token', res.data.token);
    //         props.history.push('/journal');
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //   }

    const handleChange = (event) => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(credentials);
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name='firstName'
                    type='text'
                    placeholder="First Name"
                    value={credentials.firstName}
                    onChange={handleChange}
                // required
                />
                <input
                    name='lastName'
                    type='text'
                    placeholder="Last Name"
                    value={credentials.lastName}
                    onChange={handleChange}
                // required
                />
                <input
                    name='email'
                    type='text'
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                // required
                />
                <input
                    name='password'
                    type='password'
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                // required
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // fetchingData: state.fetchingData,
        // isLoggedIn: state.isLoggedIn,
        // error: state.error,
        // token: state.token,
        // id: state.id,
        // firstName: state.id,
        // lastName: state.lastName,
        // email: state.email,
        // password: state.password
    }
}

export default connect(mapStateToProps, { login })(Login);