import React from "react";
import axios from "axios";

export default class ExerciseInput extends React.Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const workout = {
      lift: this.state.name
    };

    axios
      .post(`https://weight-lifting-journal-3.herokuapp.com/api`, { workout })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className='eInput'>
        <form onSubmit={this.handleSubmit}></form>
      </div>
    );
  }
}
