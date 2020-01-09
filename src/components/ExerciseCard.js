import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { CardStyle }from './Styles';



const ExerciseCard = (props) => {
  return (
    <CardStyle>
      <div>
        <p>{props.name}</p>
        <p>Weight: {props.weight}</p>
        <p>Reps: {props.reps}</p>
        <p>Sets: {props.sets}</p>
      </div>
    </CardStyle>
  )
}

export default ExerciseCard;