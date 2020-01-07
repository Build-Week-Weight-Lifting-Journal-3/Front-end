import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import JournalCard from './JournalCard';
import AddJournal from './AddJournal';
import Exercise from './Exercise';
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
  margin-top:20px;
`

const Journal = () => {
    const [exercises, setExcercises] = useState([]);

    const getData = () => {
        axiosWithAuth()
            .get('/journals')
            .then(res => {
                console.log(res);
                setExcercises(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1>Journal Entries</h1>
            <div>Add Journal
                <AddJournal></AddJournal>
                </div>
            <GridStyle>
                {exercises.map((journal) => {
                    return (
                        <JournalCard
                            key={journal.id}
                            name={journal.name}
                            date={journal.date}
                        />
                    )
                })}
            </GridStyle>

        </div>
    )
}

export default Journal;