import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: #3AAFA9;
`
const InputStyling = styled.input`
  width: 50%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-family: 'Lucida Casual', 'Comic Sans MS';
  padding: 1.5%;
  border: 2px solid white;
  outline: none;
  margin-top: 3%;
  
  &:focus {
    outline: none;
  }
`
export const ButtonStyling = styled.button`
    text-align: center;
    background-color: #22283A;
    color: white;
    padding: 8px 0px;
    margin: 3%;
    border-radius: 5px;
    font-size: 1.9rem;
    font-family: 'Lucida Casual', 'Comic Sans MS';
    width: 200px;
    border: 2px solid #22283A;
    outline: none;

    &:hover {
        background-color: white;
        color: #22283A;
        animation: shadow-pulse 1s infinite;
       
        @keyframes shadow-pulse {
            0% {
              box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
            }
            100% {
              box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
            }
        }
    }
`

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
          .email('Not a valid email address. Check your spelling, poindexter.')
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
            <InputContainer>
              <label htmlFor="email">Email</label>
              <InputStyling
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
              <InputStyling
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
              <ButtonStyling type="submit" disabled={isSubmitting}>
                Login
            </ButtonStyling>
              <Link to='/register'><ButtonStyling>Register</ButtonStyling></Link>
            </InputContainer>
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