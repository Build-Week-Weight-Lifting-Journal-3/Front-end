import React from "react";
import { getToken } from "./utils/api";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Exercise from "./components/ExerciseCard"

import JournalCard from "./components/JournalCard";
import ExerciseCard from "./components/ExerciseCard";
import Home from "./components/Home";
// import Login from "./components/Login";
import Logout from "./components/Logout";
import NewExercise from "./components/ExerciseForm";
import CreateJournal from "./components/CreateJournal";
import PrivateRoute from "./components/PrivateRoute";
// import Signup from "./components/SignUp";
import UpdateExercise from "./components/Update";


const User = ({ match }) => {
  return <h1>Welcome User {match.params.username}</h1>;
};

function App() {
  const signedIn = getToken();

  return (
    <div>
      <div className="App">
        <ul>
          <li>
            {!signedIn && (<NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>)}
          </li>
          {signedIn && (<NavLink to="/dashboard" exact activeStyle={{ color: "green" }}>
            Dashboard
            </NavLink>)}
          <br/>
          {signedIn && (<NavLink to="/logout" exact activeStyle={{ color: "green" }}>
            Logout
            </NavLink>)}
        </ul>
        <hr />

        <Route
          path="/"
          exact
          render={() => {
            return <h1>Weight Lifting App</h1>;
          }}
        />

      </div>
      <Route exact path="/" component={Home} />
      {/* <Route path="/signup" exact component={Signup} /> */}
      {/* <Route path="/login" exact component={Login} /> */}
      <Route exact path="/api/exercises/:id" component={UpdateExercise} />
      <Route path="/user/:username" exact component={User} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/add-journal" exact component={CreateJournal} /> 
      <PrivateRoute exact path="/add-exercise" component={NewExercise} />
      <PrivateRoute exact path="/exercises" component={ExerciseCard} />
      <PrivateRoute exact path="/logout" component={Logout} />

    </div>
  );
}

export default withRouter(App);