import React, { useState, useEffect } from 'react';
import axios from "axios"
import ExerciseCard from './ExerciseCard';
import styled from 'styled-components';




export default function AnotherJournal(props) {
  // TODO: Add useState to track data from useEffect
  const [exercises, setExercises] = useState([]);

    
    useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("https://weight-lifting-journal-3.herokuapp.com/api/exercises")
      .then(response => {
        setExercises(response.data);

        console.log("this is response", response);
      })
      .catch(error => {
        console.error("WRRRONG", error);
      });
    
  }, []);
  return (
    <div>
        <h1>Exercises</h1>
        <div>
            {exercises.map((param) => {
                return (
                    <ExerciseCard
                        key={param.id}
                        name={param.name}
                        region={param.region}
                    />
                )
            })}
        </div>
    </div>
)
}
