import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateExercise, editExerciseFields } from '../actions';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
`

const ListExerciseCard = (props) => {
    console.log(props);

    const [editValue, setEditValue] = useState({
        name: '',
        region: '',
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
            {props.isEditing ? (
                <form onSubmit={submitChanges}>
                    <input
                        type='text'
                        name='name'
                        placeholder={props.name}
                        value={editValue.name}
                        onChange={handleChanges}
                    />
                    <input
                        type='text'
                        name='region'
                        placeholder={props.region}
                        value={editValue.region}
                        onChange={handleChanges}
                    />
                </form>
            ) : (
                <CardStyle>
                    <p>{props.name}</p>
                    <p>{props.region}</p>
                    <p>{props.id}</p>
                    {props.data.length === 0 ||
                    (!props.isEditing && (
                        <button onClick={() => props.editExerciseFields()}>Edit</button>
                    ))}
                </CardStyle>
            )}
            {props.isEditing && (
                <button onClick={() => props.updateExercise(editValue)}>Submit Edit</button>
            )}
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

export default connect(mapStateToProps, { updateExercise, editExerciseFields })(ListExerciseCard);