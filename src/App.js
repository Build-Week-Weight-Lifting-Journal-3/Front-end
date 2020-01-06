import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Journal from './components/Journal';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/journal' component={Journal} />
      </div>
    </Router>
  );
}

export default App;