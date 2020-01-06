import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateJournal = props => {
  const [newJournal, setNewJournal] = useState({
    date: new Date(),
    region: ""
  });

  const handleChange = date => {
    setNewJournal({ ...newJournal, date: date });
  };
  const handleSubmit = e => {
    console.log(e);
    axios
      .post(
        "https://weight-lifting-journal-3.herokuapp.com/api/journals/",
        newJournal
      )
      .then(result => {
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <DatePicker
            todayButton="Today"
            selected={newJournal.date}
            onChange={handleChange}
          ></DatePicker>
        </div>
      </div>

      <div className="field">
        <div class="control">
          <span class="select">
            <select>
              <option>Upper</option>
              <option>Lower</option>
              <option>Cardio/Core</option>
            </select>
          </span>
        </div>
      </div>
      <div className="buttons">
        <a className="button is-primary" type="submit">
          Submit
        </a>
      </div>
    </form>
  );
};

export default CreateJournal;