import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExercises, deleteExercise, updateExercise} from '../actions';
import AddExercise from './AddExercise';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ListofExercises from './ListofExercises';
import ExerciseEdit from './ExerciseEdit';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 0 2rem;
`



const ExerciseList = (props) => {
    // console.log();
    
    useEffect(() => {
        // console.log('blerp')
        props.getExercises();
    }, [])

    return (
        <div>
            <Link to='/'><button>Logout</button></Link>
            <Link to='/journal'><button>Journals</button></Link>
            <h1>My Exercises</h1>
            <ListofExercises/>
            {/* <ExerciseEdit/> */}
            <h1>Add Exercises to Journal</h1>
            <AddExercise/>
            <h1>Journal Exercises</h1>
            <GridStyle>
                {props.data.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.name}</p>
                            <p>Weight: {e.weight}</p>
                            <p>Reps: {e.reps}</p>
                            <p>Sets: {e.sets}</p>
                            <button onClick={() => props.deleteExercise(e.id)}>Delete</button>
                        </div>
                    )
                })}
            </GridStyle>
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

export default connect(mapStateToProps, { getExercises, deleteExercise, updateExercise })(ExerciseList);