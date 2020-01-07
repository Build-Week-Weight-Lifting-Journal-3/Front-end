import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getJournals } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ExerciseCard from './ExerciseCard';
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

const Journal = () => {
    const [journals, setJournals] = useState([]);

    const getJournals= () => {
        axiosWithAuth()
            .get('/journals')
            .then(res => {
                console.log(res);
                setJournals(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getJournals();
    }, [])

    const handleDelete = (event, id) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>My Journal</h1>
            <GridStyle>
                {journals.map((ex) => {
                    return (
                        <div key={ex.id}>
                            <p>{ex.name}</p>
                            <p>{ex.date}</p>
                        </div>
                    )
                })}
            </GridStyle>
        </div>
    )
}

export default Journal;

// const mapStateToProps = (state) => {
//     return {
//         data: state.data
//     }
// }

// export default connect(mapStateToProps, {getJournals})(Journal);