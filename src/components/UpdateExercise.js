// import React, { useState } from 'react';
// import { updateExercise } from '../actions';
// import { connect } from 'react-redux';

// const initialFormValues = {
//     name: '',
//     weight: '',
//     reps: '',
//     sets: ''
// }

// const UpdateExercise= (props) => {
//     const [input, setInput] = useState(initialFormValues);
//     // console.log(input);

//     const handleInputChange = (event) => {
//         setInput({ ...input, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.addExercise(input);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     name='name'
//                     type='text'
//                     placeholder='Exercise Name'
//                     // value={input.name}
//                     onChange={handleInputChange}
//                     // required
//                 />
//                 <input
//                     name='weight'
//                     type='text'
//                     placeholder='Weight'
//                     onChange={handleInputChange}
//                     // required
//                 />
//                 <input
//                     name='reps'
//                     type='text'
//                     placeholder='Reps'
//                     onChange={handleInputChange}
//                     // required
//                 />
//                 <input
//                     name='sets'
//                     type='text'
//                     placeholder='Sets'
//                     onChange={handleInputChange}
//                     // required
//                 />
//                 <button type='submit'>Add</button>
//             </form>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         // posts: state.plans.posts
//     }
// }

// export default connect(mapStateToProps, {updateExercise})(UpdateExercise);