import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RegisterAccount from './components/RegisterAccount';
import JournalList from './components/JournalList';
import ExerciseList from './components/ExerciseList';
import Signup from "./components/Signup.js";
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <main className="App">
          <Route exact path='/' component={Login} />
          <Route path="/register" component={RegisterAccount} />
          {/* <Route exact path='/Signup' component={Signup} /> */}
        <Switch>
          <PrivateRoute path='/journal' component={JournalList} />
          <PrivateRoute path='/exercises' component={ExerciseList} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;