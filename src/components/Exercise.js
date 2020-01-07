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

const Exercise = () => {
    const [exercises, setExcercises] = useState([]);

    const getData = () => {
        axiosWithAuth()
            .get('/jouexe/:id')
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
            <h1>Exercise Entries
            </h1>
            <GridStyle>
                {exercises.map((jouexe) => {
                    return (
                        <ExerciseCard
                            key={jouexe.id}
                            name={jouexe.name}
                            weight={jouexe.weight}
                            reps={jouexe.reps}
                            sets={jouexe.sets}
                        />
                    )
                })}
            </GridStyle>
            
        </div>
    )
}

export default Exercise;