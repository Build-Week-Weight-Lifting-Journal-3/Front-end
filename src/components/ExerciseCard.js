import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
`

const ExerciseCard = (props) => {
  return (
    <CardStyle>
      <div>
        <p>Name: {props.name}</p>
        <p>Weight: {props.weight}</p>
        <p>Reps: {props.reps}</p>
        <p>Sets: {props.sets}</p>
      </div>
    </CardStyle>
  )
}

export default ExerciseCard;