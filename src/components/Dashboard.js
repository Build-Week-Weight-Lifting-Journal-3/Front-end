import React from 'react';
import PrivateRoute from "../components/PrivateRoute"
import JournalCard from "./JournalCard"
import styled from "styled-components";

const H1 = styled.h1`
text-align: center
`


function Dashboard() {
    return (
        <div>
            <H1>Dashboard</H1>

            <PrivateRoute exact path="/dashboard" component={JournalCard} />

        </div>
    )
}

export default Dashboard