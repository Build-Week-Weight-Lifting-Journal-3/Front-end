import React, { useState } from 'react';
import { addExercise } from '../actions';
import { connect } from 'react-redux';

const initialFormValues = {
    // name: '',
    weight: '',
    reps: '',
    sets: '',
    journalId: '',
    exerciseId: ''
}

const AddExercise = (props) => {
    const [input, setInput] = useState(initialFormValues);

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addExercise(input);
        setInput(initialFormValues);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                    name='name'
                    type='text'
                    placeholder='Exercise Name'
                    value={input.name}
                    onChange={handleInputChange}
                    // required
                /> */}
                 <input
                    name='weight'
                    type='text'
                    placeholder='Weight'
                    value={input.weight}
                    onChange={handleInputChange}
                    // required
                />
                 <input
                    name='reps'
                    type='text'
                    placeholder='Reps'
                    value={input.reps}
                    onChange={handleInputChange}
                    // required
                />
                <input
                    name='sets'
                    type='text'
                    placeholder='Sets'
                    value={input.sets}
                    onChange={handleInputChange}
                    // required
                />
                <input
                    name='journalId'
                    type='text'
                    placeholder='Journal ID'
                    value={input.journalId}
                    onChange={handleInputChange}
                    // required
                />
                <input
                    name='exerciseId'
                    type='text'
                    placeholder='Exercise ID'
                    value={input.exerciseId}
                    onChange={handleInputChange}
                    // required
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {addExercise})(AddExercise);