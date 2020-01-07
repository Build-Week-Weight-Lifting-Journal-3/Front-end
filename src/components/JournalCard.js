import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
  padding: 10px;
`

const handleDelete = e => {
    e.preventDefault ();
    axiosWithAuth
    .delete(`/journals/:id`)
    .then(res => {
      console.log("res", res);
      this.props.history.push("/");
    })
    .catch(err => console.log(err));
  };

const JournalCard = (props) => {
  return (
    <CardStyle>
      <div>
        <p>{props.name}</p>
        <p>{props.date}</p>
        {/* <button> <Link to ={`/journal/:id`}>Update Journal</Link></button>
        <button onClick={this.handleDelete}>Delete</button> */}
      </div>
    </CardStyle>
    
  )
}

export default JournalCard;