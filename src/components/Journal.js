import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJournals, addJournal, deleteJournal, updateJournal } from '../actions';
import UpdateJournal from './UpdateJournal';
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

const Journal = (props) => {
    
    useEffect(() => {
        // console.log('blerp')
        props.getJournals();
    }, [])

    return (
        <div>
            <h1>My Journal</h1>
            <UpdateJournal addJournal={props.addJournal} updateJournal={props.updateJournal} />
            <GridStyle>
                {props.data.map((j) => {
                    return (
                        <div key={j.id}>
                            <p>{j.name}</p>
                            <p>{j.date}</p>
                            <button onClick={() => props.deleteJournal(j.id)}>Delete</button>
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
        data: state.data
    }
}

export default connect(mapStateToProps, { getJournals, addJournal, deleteJournal, updateJournal })(Journal);