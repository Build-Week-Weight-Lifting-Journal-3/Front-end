// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

// const Login = () => {
//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       onSubmit={(values, { setSubmitting }) => {
//         console.log("Submitting");
//       }}
//       validationSchema={Yup.object().shape({
//         email: Yup.string()
//           .email()
//           .required("Required"),
//         password: Yup.string()
//           .required("No password provided.")
//           .min(8, "Password is too short - should be 8 chars minimum.")
//           .matches(/(?=.*[0-9])/, "Password must contain a number.")
//       })}
//     >
//       {props => {
//         const {
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit
//         } = props;
//         return (
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.email && touched.email && "error"}
//             />
//             {errors.email && touched.email && (
//               <div className="input-feedback">{errors.email}</div>
//             )}
//             <label htmlFor="email">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.password && touched.password && "error"}
//             />
//             {errors.password && touched.password && (
//               <div className="input-feedback">{errors.password}</div>
//             )}
//             <button type="submit" disabled={isSubmitting}>
//               Login
//             </button>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default Login;

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
        props.history.push('/journal');
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
        fetchingData: state.fetchingData,
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        id: state.id
    }
}

export default connect(mapStateToProps, { login })(Login);