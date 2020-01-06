import React, { useState } from 'react';

const initialFormState = {
    username: '',
    password: ''
}

const Login = () => {
    const [form, setForm] = useState(initialFormState);

    return (
        <div>
            <hi>Welcome!</hi>
        </div>
    )
}

export default Login;