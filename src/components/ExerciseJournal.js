import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseCard from './ExerciseCard';

export default function ExerciseJournal(props) {
const [exercises, setExercises] = useState([]);



useEffect(() => {
  axios
    .get('https://weight-lifting-journal-3.herokuapp.com/api/')
    .then(res => {
    setExercises(res.data);

    console.log('You are getting warmer', res);
    })
    .catch(error => {
      console.error('FUBAR', error);
    });

  }, []);
    return (
      <div>
        <h1>Exercises</h1>
        <section>
          {exercises.map((param) => {
            return (
              <ExerciseCard
                key={param.id}
                name={param.name}
                group={param.group}
              />
            )
          })}
        </section>
      </div>
    )
}