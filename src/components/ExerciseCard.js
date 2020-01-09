import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteExercise, updateExercise, editExerciseFields } from '../actions';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
`

const ExerciseCard = (props) => {
    console.log(props);

    const [editValue, setEditValue] = useState({
        name: '',
        region: '',
        weight: '',
        reps: '',
        sets: '',
        id: props.id
    })

    const handleChanges = (event) => {
        setEditValue({
            ...editValue,
            [event.target.name]: event.target.value
        })
    }

    const submitChanges = (event) => {
        event.preventDefault();
        props.updateExercise(editValue);
    }

    return (
        <div>
                <CardStyle>
                    <p>{props.name}</p>                    <p>Weight: {props.weight}</p>
                    <p>Reps: {props.reps}</p>
                    <p>Sets: {props.sets}</p>
                    <button onClick={() => props.deleteExercise(props.id)}>Delete</button>
                </CardStyle>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        data: state.data,
        isEditing: state.isEditing
    }
}

export default connect(mapStateToProps, { deleteExercise, updateExercise, editExerciseFields })(ExerciseCard);