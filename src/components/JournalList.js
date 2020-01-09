import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJournals } from '../actions';
import AddJournal from './AddJournal';
import JournalCard from './JournalCard';
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
        props.getJournals(+localStorage.getItem('id'));
    }, [])

    return (
        <div>
            <h1>My Journal</h1>
            <AddJournal />
            <GridStyle>
                {props.data.map(j => {
                    return (
                        <JournalCard
                            key={j.id}
                            name={j.name}
                            date={j.date}
                            id={j.id}
                        />
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
    }
}

export default connect(mapStateToProps, { getJournals, })(JournalList);