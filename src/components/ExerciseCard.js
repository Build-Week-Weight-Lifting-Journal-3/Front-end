import React from 'react';
import { connect } from 'react-redux';
import { deleteExercise} from '../actions';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
`

const ExerciseCard = (props) => {
    console.log(props);

    return (
        <div>
                <CardStyle>
                    <p>{props.name}</p>                    
                    <p>Weight: {props.weight}</p>
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

export default connect(mapStateToProps, { deleteExercise })(ExerciseCard);