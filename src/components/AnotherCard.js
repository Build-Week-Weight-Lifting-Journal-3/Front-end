import React from 'react';
import styled from 'styled-components';
import { ExerciseStyle }from './Styles';




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