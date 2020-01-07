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
        <p>{props.region}</p>
      </div>
    </CardStyle>
  )
}

export default ExerciseCard;