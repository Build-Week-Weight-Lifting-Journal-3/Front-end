// import React, {useState, useEffect} from 'react';
// import axiosWithAuth from 'axios';
// import ListofExercises from './ListofExercises';

// const ExerciseEdit = (props) => {
//     console.log('props', props)
//     const [exercise, setExercise] = useState({
//         id: '',
//         name: '',
//         region: ''
//     });

//     const id = props.match.params.id;

//     useEffect(() => {
//         axiosWithAuth
//         .get(`/exercises/${exercise.id}`)
//         .then(response => setExercise(response.data))
//         .catch(error => (error))
//         console.log(exercise)
//     },);

//     const changeHandler = (e) => {
//         e.preventDefault();
//         setExercise({
//             ...exercise,
//             [e.target.name]: e.target.value,
//             id:id
//         });
//         console.log(exercise);
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         axiosWithAuth
//         .put(`/exercises/${exercise.id}`, exercise)
//         .then(response => {
//             console.log('exercise', response);
//             setExercise(response.data);
//             props.history.push(`/exercises/${exercise.id}`);
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     };
//     return (
//         <div>
//             <ListofExercises />
//             <h2>Update Exercise</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                 type='text'
//                 name='name'
//                 placeholder="Name"
//                 value={exercise.name}
//                 onChange={changeHandler}
//                 />
//                 <input 
//                 type='text'
//                 name='region'
//                 placeholder='Body Region'
//                 value={exercise.region}
//                 onChange={changeHandler}
//                 />
//                 <button type='submit'>Update Exercise</button>
//                 </form>
//         </div>
//     )
// }

// export default ExerciseEdit;


// // import React, { useState, useEffect } from "react";
// // import { axiosWithAuth } from "../utils/axiosWithAuth";

// // function ExerciseEdit(props, id) {
// //     const [exercise, setExercise] = useState({
// //         name: '',
// //         region: '',
// //         id: ''
// //     });

// //     const handleChange = event => {
// //         setExercise({
// //             ...exercise,
// //             [event.target.name]: event.target.value
// //         });
// //     };

// //     const handleSubmit = (event, id) => {
// //         event.preventDefault();
        

// //         axiosWithAuth()
// //             .put(`/exercises/${id}`, exercise)
// //             .then(result => {
// //                 props.history.push("/exercises");
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             });
// //     };

// //     return (
// //         <>
// //             <h1>Update My Exercises</h1>
// //         <div>
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     type="text"
// //                     name="name"
// //                     placeholder="Name"
// //                     value={exercise.name}
// //                     onChange={handleChange}
// //                 />
// //                   <input
// //                     type="name"
// //                     name="region"
// //                     placeholder="Region"
// //                     value={exercise.region}
// //                     onChange={handleChange}
// //                 />
// //                 <input
// //                     type="text"
// //                     name="id"
// //                     placeholder="ID"
// //                     value={exercise.id}
// //                     onChange={handleChange}
// //                 />

// //                 <button type="submit">Edit Exercise</button>
// //             </form>
// //     </div>
// //         </>
// //     );
// // }

// // export default ExerciseEdit;