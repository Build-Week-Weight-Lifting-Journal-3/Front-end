import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJournals, deleteJournal, editJournal } from '../actions';
import AddJournal from './AddJournal';
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

    return (
        <div>
            <h1>My Journal</h1>
            <AddJournal />
            <GridStyle>
                {props.data.map((j) => {
                    return (
                        <div key={j.id}>
                            <p>{j.name}</p>
                            <p>{j.date}</p>
                            <button onClick={() => props.deleteJournal(j.id)}>Delete</button>
                            <button onClick={() => props.editJournal(j.id)}>Edit</button>
                        </div>
                    )
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

export default connect(mapStateToProps, { getJournals, deleteJournal, editJournal })(JournalList);