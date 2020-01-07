import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import RegisterAccount from './components/RegisterAccount';
import Journal from './components/Journal';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Login from "./components/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Route exact path='/' component={Login} />
        <Route path="/register" component={RegisterAccount} />
        <PrivateRoute path='/journal' component={Journal} />
      </main>
    </Router>
  );
}

export default App;