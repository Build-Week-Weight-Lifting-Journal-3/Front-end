import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UpdateExercise = (props) => {
    console.log('props', props)
    const [exercise, setExercise] = useState({
        id: '',
        weight: '',
        reps: '',
        sets: ''
    });

    const id = props.match.params.id;

    useEffect(() => {
        axiosWithAuth
        .get(`/jouexe/:id`)
        .then(response => setExercise(response.data))
        .catch(error => (error))
        console.log(exercise)
    }, []);

    const changeHandler = (e) => {
        e.preventDefault();
        setExercise({
            ...exercise,
            [e.target.weight]: e.target.value,
            id:id
        });
        console.log(exercise);
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth
        .put(`/jouexe/:id`, exercise)
        .then(response => {
            console.log('exercise', response);
            setExercise(response.data);
            props.history.push(`/exercises`);
        })
        .catch(err => {
            console.error(err);
        });
    };
    return (
        <div>
            <h2>Update Exercise</h2>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='weight'
                placeholder='Weight'
                value={exercise.weight}
                onChange={changeHandler}
                />
                <input 
                type='text'
                name='reps'
                placeholder='Reps'
                value={exercise.reps}
                onChange={changeHandler}
                />
                <input 
                type='text'
                name='sets'
                placeholder='Sets'
                value={exercise.sets}
                onChange={changeHandler}
                />
                <button type='submit'>Update Exercise</button>
                </form>
        </div>
    )
}

export default UpdateExercise;