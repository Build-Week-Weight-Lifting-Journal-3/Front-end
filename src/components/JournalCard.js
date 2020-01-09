import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJournal, editJournal, editFields } from '../actions';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: slategrey;
`

const JournalCard = (props) => {
    // console.log(props);
    const [editValue, setEditValue] = useState({
        name: '',
        date: '',
        id: props.id
    })

    const handleChanges = (event) => {
        setEditValue({
            ...editValue,
            [event.target.name]: event.target.value
        })
    }

    const submitChanges = (event) => {
        event.preventDefault();
        props.editJournal(editValue);
    }

    return (
        <div>
            {props.isEditing ? (
                <form onSubmit={submitChanges}>
                    <input
                        type='text'
                        name='name'
                        placeholder={props.name}
                        value={editValue.name}
                        onChange={handleChanges}
                    />
                    <input
                        type='text'
                        name='date'
                        placeholder={props.date}
                        value={editValue.date}
                        onChange={handleChanges}
                    />
                </form>
            ) : (
                <CardStyle>
                    <Link to='/exercises'><button>{props.name}</button></Link>
                    <p>{props.date}</p>
                    {props.data.length === 0 ||
                    (!props.isEditing && (
                        <button onClick={() => props.editFields()}>Edit</button>
                    ))}
                    <button onClick={() => props.deleteJournal(props.id)}>Delete</button>
                </CardStyle>
            )}
            {props.isEditing && (
                <button onClick={() => props.editJournal(editValue)}>Submit</button>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        data: state.data,
        isEditing: state.isEditing
    }
}

export default connect(mapStateToProps, { deleteJournal, editJournal, editFields })(JournalCard);