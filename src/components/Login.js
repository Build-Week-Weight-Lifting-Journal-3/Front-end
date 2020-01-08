import React, { useState } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { login } from '../actions';
import { Formik } from "formik";
import * as Yup from "yup";


const initialFormState = {
    // firstName: '',
    // lastName: '',
    email: '',
    password: ''
}

const Login = (props) => {
    const [credentials, setCredentials] = useState(initialFormState);

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
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {props => {
        const {
          touched,
          errors,
          isSubmitting,
          handleBlur,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            <Link to='/register'><button>Register Here!</button></Link>
          </form>
        )
      }}
    </Formik>
  )
}

const mapStateToProps = state => {
    return {
        ...state
        // fetchingData: state.fetchingData,
        // isLoggedIn: state.isLoggedIn,
        // error: state.error,
        // id: state.id
    }
}

export default connect(mapStateToProps, { login })(Login);