import React from 'react';
import styled from 'styled-components';

const ExerciseStyle = styled.div`
  text-align: center;
  box-shadow: 0 7px 4px #111;
  border-radius:5px;
  border:1px solid black;
  
`



const AnotherCard = (props) => {
  return (
    <ExerciseStyle>
      <div>
        <p>{props.name}</p>
        <p>{props.region}</p>
      </div>
   </ExerciseStyle>
  )
}

export default AnotherCard;