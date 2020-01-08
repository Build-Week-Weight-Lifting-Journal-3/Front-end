import React from 'react';
import styled from 'styled-components';

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
      </div>
    </CardStyle>
  )
}



export default ExerciseCard;