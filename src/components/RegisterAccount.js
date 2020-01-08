// import React, { useState } from "react";
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import {Link} from 'react-router-dom';

// const initialFormState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
// }

// const RegisterAccount = (props) => {
//     const [newCredentials, setNewCredentials] = useState(initialFormState);
//     // console.log(newCredentials);

//     const register = (event) => {
//         event.preventDefault();
//         axiosWithAuth()
//             .post('/auth/register', newCredentials)
//             .then(res => {
//                 console.log(res);
//                 // localStorage.setItem('token', res.data.token);
//                 props.history.push('/');
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     const handleChange = (event) => {
//         event.preventDefault();
//         setNewCredentials({
//             ...newCredentials,
//             [event.target.name]: event.target.value
//         });
//     }

//     return (
//         <div>
//             <h1>Sign-Up!</h1>
//             <form onSubmit={register}>
//                 <input
//                     name='firstName'
//                     type='text'
//                     placeholder="First Name"
//                     value={newCredentials.firstName}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     name='lastName'
//                     type='text'
//                     placeholder="Last Name"
//                     value={newCredentials.lastName}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     name='email'
//                     type='text'
//                     placeholder="Email"
//                     value={newCredentials.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     name='password'
//                     type='password'
//                     placeholder="Password"
//                     value={newCredentials.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button>Submit</button>
//             </form>
//             <Link to='/'><button>Already Have an Account?</button></Link>

//         </div>
//     )
// }

// export default RegisterAccount;

import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/index";

function Signup(props) {
    const intialState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  
    const [payload, setPayload] = useState(intialState);
  
    const handleChange = event => {
      setPayload({ ...payload, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      props.register(payload);
        props.history.push("/journals");
  
      console.log(handleSubmit);
    };
  
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={payload.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={payload.lastName}
            onChange={handleChange}
            required
          />
             <input
            name="email"
            type="email"
            placeholder="email"
            value={payload.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            minLength={4}
            maxLength={10}
            value={payload.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  const mapStateToProps = state => {
    return { reg_user: state.reg };
  };
  
  export default connect(
    mapStateToProps,
    { register }
  )(Signup);