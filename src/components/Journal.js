import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getJournals } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
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
    // const [journals, setJournals] = useState([]);

    // const getJournals= () => {
    //     axiosWithAuth()
    //         .get('/journals')
    //         .then(res => {
    //             console.log(res);
    //             setJournals(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    useEffect(() => {
        // console.log('blerp')
        props.getJournals();
    }, [])

    const handleDelete = (event, id) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>My Journal</h1>
            <GridStyle>
                {props.data.map((j) => {
                    return (
                        <div key={j.id}>
                            <p>{j.name}</p>
                            <p>{j.date}</p>
                            <button onClick={handleDelete}>Delete</button>
                            <UpdateJournal />
                        </div>
                    )
                })}
            </GridStyle>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {getJournals})(Journal);