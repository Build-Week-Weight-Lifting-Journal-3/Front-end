import React from 'react';
import './App.css';
import Login from "./components/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Route exact path ="/Login" component ={Login} />
      <Route exact path = "/" />
    </main>
  );
}

export default App;
