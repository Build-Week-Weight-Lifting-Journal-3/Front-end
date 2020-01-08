import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function ExerciseEdit(props, id) {
    const [exercise, setExercise] = useState({
        name: '',
        region: '',
        id: ''
    });

    const handleChange = event => {
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event, id) => {
        event.preventDefault();
        

        axiosWithAuth()
            .put(`/exercises/${id}`, exercise)
            .then(result => {
                props.history.push("/exercises");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <h1>Update My Exercises</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={exercise.name}
                    onChange={handleChange}
                />
                  <input
                    type="name"
                    name="region"
                    placeholder="Region"
                    value={exercise.region}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={exercise.id}
                    onChange={handleChange}
                />

                <button type="submit">Edit Exercise</button>
            </form>
    </div>
        </>
    );
}

export default ExerciseEdit;