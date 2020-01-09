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
        <p>{props.name}</p>
        <p>Region: {props.region}</p>
        <p>ID: {props.id}</p>
        <button> <Link to ={`/update-exercise/${props.id}`}>Update Exercise</Link></button>
      </div>
    </CardStyle>
  )
}



export default ExerciseCard;