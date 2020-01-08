import React from 'react';
import axios from 'axios';

export default class Exercises extends React.Component {
  state = {
    lifts: [],
  }

  componentDidMount() {
    axios.get(`https://wger.de/api/v2/workout/`).then(res => {
      console.log(res);
      this.setState({ lifts: res.data });
      });
  }
    render() {
      return (
      <ul>
        {this.state.lifts.map(lift => (
        <li key={lift.id}>{lift.name}</li>
        ))}
      </ul>
      );
    }
}