import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJournals, deleteJournal, editJournal, editFields, logout } from '../actions';
import AddJournal from './AddJournal';
import EditJournal from './EditJournal';
import { Link } from 'react-router-dom';
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

const JournalList = (props) => {

    useEffect(() => {
        // console.log('blerp')
        props.getJournals();
    }, [])

    const signOut = () => {
        localStorage.clear('token');
        props.logout();
        props.history.push('/');
    }

    return (
        <div>
            <button onClick={signOut}>Logout</button>
            <h1>My Journal</h1>
            <AddJournal />
            {/* <EditJournal /> */}
            <GridStyle>
                {props.data.map((j) => {
                    return (
                        <div key={j.id}>
                            <Link to='/exercises'><button>{j.name}</button></Link>
                            <p>{j.date}</p>
                            <button onClick={() => props.deleteJournal(j.id)}>Delete</button>
                            <button onClick={() => props.editJournal(j.id)}>Edit</button>
                        </div>
                    )
                        // (!props.isEditing && (
                        //     <button onClick={() => props.editFields()}>Edit</button>
                        // ))
                })}
            </GridStyle>
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

export default connect(mapStateToProps, { getJournals, deleteJournal, editJournal, editFields, logout })(JournalList);