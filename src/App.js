import React from "react";
import Signup from "./components/Signup.js";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <Route exact path='/Signup' component={Signup} />
    </main>
  );
}

export default App;
