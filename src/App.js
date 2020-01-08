import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RegisterAccount from './components/RegisterAccount';
import Journal from './components/Journal';
import Signup from "./components/Signup.js";
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Login from "./components/Login";
import AnotherJournal from './components/AnotherJournal';

function App() {
  return (
    <Router>
      <main className="App">
        <Route exact path='/' component={Login} />
        <Route path="/register" component={RegisterAccount} />
        <Route exact path='/journal' component={Journal} />
        <Route exact path='/anotherjournal' component={AnotherJournal} />
        {/* <Route exact path='/Signup' component={Signup} /> */}
      </main>
    </Router>  
    
  );
}

export default App;