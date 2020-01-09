import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RegisterAccount from './components/RegisterAccount';
import JournalList from './components/JournalList';
import ExerciseList from './components/ExerciseList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Login from './components/Login';
import AnotherJournal from './components/AnotherJournal';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <main className='App'>
          <NavBar />
          <Route exact path='/' component={Login} />
          <Route path='/register' component={RegisterAccount} />
        <Switch>
          <PrivateRoute exact path='/journal' component={JournalList} />
          <PrivateRoute exact path='/anotherjournal' component={AnotherJournal} />
          <PrivateRoute path='/exercises' component={ExerciseList} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;