import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJournal, editJournal, editFields } from '../actions';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
`

const JournalCard = (props) => {
    console.log(props);
    return (
        <CardStyle>
            <Link to='/exercises'><button>{props.name}</button></Link>
            <p>{props.date}</p>
            <button onClick={() => props.deleteJournal(props.id)}>Delete</button>
            <button onClick={() => props.editJournal(props.id)}>Edit</button>
            {/* (!props.isEditing && (
            <button onClick={() => props.editFields()}>Edit</button>
            )) */}
        </CardStyle>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        
    }
}

export default connect(mapStateToProps, { deleteJournal, editJournal, editFields })(JournalCard);