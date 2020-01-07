import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ExerciseCard from './ExerciseCard';
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

const Journal = () => {
    const [exercises, setExcercises] = useState([]);

    const getData = () => {
        axiosWithAuth()
            .get('/exercises')
            .then(res => {
                console.log(res);
                setExcercises(res.data);
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
            <h1>My Journal</h1>
            <GridStyle>
                {exercises.map((ex) => {
                    return (
                        <ExerciseCard
                            key={ex.id}
                            name={ex.name}
                            region={ex.region}
                        />
                    )
                })}
            </GridStyle>
        </div>
    )
}

export default Journal;