import React, { useState, useEffect } from 'react';
import AnotherCard from './AnotherCard';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const GridStyle = styled.div`
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 0 2rem;
  color: #990000;
  
`


export default function AnotherJournal(props) {
  // TODO: Add useState to track data from useEffect
  const [exercises, setExcercises] = useState([]);
    const getData = () => {
    axiosWithAuth()
        .get('/exercises')
        .then(response => {
            console.log("this is response", response);
            setExcercises(response.data);
        })
        .catch(err => {
            console.log(err);
        })
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
        <h1>Recomended Exercises</h1>
        <GridStyle>
            {exercises.map((exercises) => {
                return (
                    <AnotherCard
                        key={exercises.id}
                        name={exercises.name}
                        region={exercises.region}
                    />
                )
            })}
        </GridStyle>       
    </div>
)
}
