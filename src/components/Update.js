import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import styled from "styled-components";

const EditDiv = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 20px auto;
`;

const Inputs = styled.input`
  margin: 16px 0 16px 0;
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
`;


function UpdateExercise(props, id) {
    const [workout, setWorkout] = useState({
        name: "",
        reps: "",
        sets: "",
        weight: ""
    });

    const handleChange = event => {
        setWorkout({
            ...workout,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event, id) => {
        event.preventDefault();
        

        api()
            .put(`/api/exercises/${props.match.params.id}`, workout)
            .then(result => {
                props.history.push("/exercises");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <h1>Update User</h1>
        <EditDiv>
            <form onSubmit={handleSubmit}>
                <Inputs
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={workout.name}
                    onChange={handleChange}
                />
                <Inputs
                    type="text"
                    name="reps"
                    placeholder="Reps"
                    value={workout.reps}
                    onChange={handleChange}
                />
                <Inputs
                    type="number"
                    name="sets"
                    placeholder="Sets"
                    value={workout.sets}
                    onChange={handleChange}
                />
                <Inputs
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={workout.weight}
                    onChange={handleChange}
                />

                <button type="submit">Save</button>
            </form>
    </EditDiv>
        </>
    );
}

export default UpdateExercise;