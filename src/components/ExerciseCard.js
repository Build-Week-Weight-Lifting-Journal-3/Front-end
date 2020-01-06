import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { api } from "../utils/api";
import { deleteEvent } from "../actions/actions";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
background: linear-gradient(to bottom, #ce4f00 5%, #322f20 100%);
background-color: #ce4f00;
color: #fafcff;
display: flex;
width: 42%;
height: 200px;
justify-content: space-around;
flex-direction: column;
align-items: center;
margin: 15px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
@media (min-width: 600px) {
  width: 30%;
  margin: 10px;
}
@media (min-width: 850px) {
  width: 30%;
  
}
`;

const Divider = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Title = styled.div`
font-size: 1.5rem;
@media (min-width: 600px) {
  font-size: 1.6rem;
}
@media (min-width: 850px) {
  font-size: 2rem;
}
`;

const CardList = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
`;

const H1 = styled.h1`
text-align: center;
`;

const Links = styled(Link)`
margin: 50px;
padding: 5px;
border: 1px solid black;
text-decoration: none;
background-color: #ce4f00;
`;

function ExerciseCard(props) {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    api()
      .get('/api/exercises/')
      .then(result => {
        setExercise(result.data.exercises);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    const workout = [exercise.find(workout => workout.id === id)];

    if (window.confirm("Are you sure?!")) {
      setExercise(exercise.filter(workout => workout.id !== id));

      api()
        .delete(`/apiexercises/${id}`)
        .then(result => {
          console.log("workout was deleted");
        })
        .catch(error => {
          console.log(error);
          setExercise([...exercise, workout]);
        });
    }
  };

return (
    <>
      <H1>Workout</H1>
      <Links to={'/add-exercise'}>Add</Links>
    <CardList>
      {exercise.map(workout => (
      
        <CardContainer key={workout.id}>
          <Title>{workout.name}</Title>
          <div>REPS: {workout.reps}</div>
          <div>SETS: {workout.sets}</div>
          <div>WEIGHT: {workout.weight}</div>
          <Divider>
          <button className="material-icons" Style="background: none;
	          color: inherit;
	          border: none;
	          padding: 0;
	          cursor: pointer;
	          outline: inherit;" onClick={e => handleDelete(e, workout.id)}>delete</button>
         <Link className="material-icons" to={`/restricted/exercises/${workout.id}`} Style="background: none;
	         color: inherit;
	         border: none;
        	 padding: 0;
	         cursor: pointer;
	         outline: inherit;" >edit</Link>
          </Divider>
        </CardContainer>
      
      ))}
      </CardList>
    </>
  );
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  { deleteEvent }
)(ExerciseCard);