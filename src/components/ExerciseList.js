import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExercises, logout } from '../actions';
import AddExercise from './AddExercise';
import ExerciseCard from './ExerciseCard';
import ListofExercises from './ListofExercises';
import styled from 'styled-components';

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

    useEffect(() => {
        props.getExercises();
    }, [])

    const signOut = () => {
        localStorage.clear('token');
        props.logout();
        props.history.push('/');
    }

    return (
        <div>
            <button onClick={signOut}>Logout</button>
            <ListofExercises />
            <h1>My Exercises</h1>
            <AddExercise/>
            <GridStyle>
                {props.data.map(e => {
                    return (
                        <ExerciseCard
                            key={e.id}
                            name={e.name}
                            region={e.region}
                            weight={e.weight}
                            reps={e.reps}
                            sets={e.sets}
                            id={e.id}
                        />
                    )
                })}
            </GridStyle>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, { getExercises, logout })(ExerciseList);