import React, { useState } from "react";
import axios from 'axios';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isFetching: false
}

const RegisterAccount = (props) => {
    const [form, setForm] = useState(initialFormState);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://weight-lifting-journal-3.herokuapp.com/api/auth/register', form)
            .then(res => {
                console.log(res);
                // localStorage.setItem('token', res.data.payload);
                // props.history.push('/Login');
            }).catch(error => console.log(error.response));
    };

    return (
        <div className="user-cont">
            <h1>Weight Lifting Registeration</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    onChange={(event) => handleChange(event)}
                    placeholder="First Name"
                    name="firstName"
                    value={form.firstName}
                    className="input"
                    required
                />
                <input
                    onChange={(event) => handleChange(event)}
                    placeholder="Last Name"
                    name="lastName"
                    value={form.lastName}
                    className="input"
                    required
                />
                <input
                    onChange={(event) => handleChange(event)}
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    className="input"
                    type="password"
                    required
                />
                <input
                    onChange={(event) => handleChange(event)}
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    className="input"
                    required
                />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default RegisterAccount;