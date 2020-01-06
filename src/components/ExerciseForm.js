import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";


const ExerciseForm = styled(Form)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 460px;
  margin: 100px auto 50px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
`;
const Fields = styled(Field)`
  margin: 16px 0 16px 0;
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
const Button = styled.button`
  box-shadow: 0px 10px 14px -7px #322f20;
  background-color: #00A35E;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #f5f5f5;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #fae9dc;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #00A35E;
  }
`;
const NewExercise = ({ errors, touched, status }) => {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    if (status) {
      setExercise([...exercise, status]);
    }
  }, [status]);
  return (
    <ExerciseForm>
      {touched.exercise && errors.exercise && (
        <p className="error">{errors.exercise}</p>
      )}
      <label>
        <span>Exercise</span>
        <Fields
          type="text"
          name="name"
          placeholder="Bench Press, Squats, Etc."
        />
      </label>
      {touched.reps && errors.reps && <p className="error">{errors.reps}</p>}
      <label>
        <span>Reps</span>
        <Fields type="number" name="reps" placeholder="10 reps" />
      </label>
      {touched.sets && errors.sets && <p className="error">{errors.sets}</p>}
      <label>
        <span>Sets</span>
        <Fields type="number" name="sets" placeholder="3" />
      </label>
      {touched.weight && errors.weight && (
        <p className="error">{errors.weight}</p>
      )}
      <label>
        <span>Weight</span>
        <Fields type="number" name="weight" placeholder="100" />
      </label>
      <Button type="submit">Submit</Button>
    </ExerciseForm>
  );
};
const ExForm = withFormik({
  mapPropsToValues: values => {
    return {
      name: values.name || "",
      reps: values.reps || "",
      sets: values.sets || "",
      weight: values.weight || ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Exercise name needed."),
    reps: yup
      .number()
      .positive("Do at least 1!")
      .required("How many reps?"),
    sets: yup
      .number()
      .positive("Do at least 1!")
      .required("How many sets?"),
    weight: yup
      .number()
      .positive("You can't lift negative lbs :)")
      .required("How much weight?")
  }),
  handleSubmit: (values, { setSubmitting, props, resetForm }) => {
    console.log(values);
    props.addTask(values)
    setSubmitting(false)
    resetForm()
  }
})(NewExercise);
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { addTask }
)(ExForm);