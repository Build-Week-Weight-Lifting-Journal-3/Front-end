import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJournals, logout } from '../actions';
import AddJournal from './AddJournal';
import JournalCard from './JournalCard';
import styled from 'styled-components';
import { GridStyle } from "./Styles";



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
        isEditing: state.isEditing
    }
}

export default connect(mapStateToProps, { getJournals, logout })(JournalList);