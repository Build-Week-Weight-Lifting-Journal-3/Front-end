import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { api } from "../utils/api";
import { Link } from "react-router-dom";
import { deleteJournal } from "../actions/actions";
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
`;
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

const Links = styled(Link)`
margin: 40px;
padding: 5px;
border: 1px solid black;
text-decoration: none;
background-color: #ce4f00;
`;

const H1 = styled.h1`
text-align: center;
`;

function JournalCard(props) {
  const [journal, setJournals] = useState([]);

  useEffect(() => {
    api()
      .get("/journals")
      .then(result => {
        setJournals(result.data.journals);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    const workout = [journal.find(workout => workout.id === id)];

    if (window.confirm("Are you sure?!")) {
      setJournals(journal.filter(workout => workout.id !== id));
      props.deleteJournal(id)
    }
  };

  return (
    <>
      <H1>Journal</H1>
     
       <Links to={"/exercises"}>Exercises</Links>
          <Links to={"/add-journal"}>Add</Links>
<CardList>
      {journal.map(workout => (
        <CardContainer key={workout.id}>
          <button onClick={e => handleDelete(e, workout.id)}>Delete</button>
          <div>Date: {workout.date}</div>
          <div>Region: {workout.region}</div>          
        </CardContainer>
      ))}
  </CardList>
    </>
  );
}

const mapStateToProps = state => {
  return {
    workout: state.workout
  };
};

export default connect(
  mapStateToProps,
  { deleteJournal }
)(JournalCard);