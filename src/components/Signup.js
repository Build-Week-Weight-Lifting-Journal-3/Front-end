import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form
} from "react-bootstrap";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 6;
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='Signup'>
      <Form onSubmit={this.handleSubmit}>
      <FormGroup 
          controlId='email' 
          bsSize='large'>
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId='confirmPassword' bsSize='large'>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
          />
        </FormGroup>
        
        <Button
          block
          type='submit'
          bsSize='large'
          disabled={!this.validateForm()}>
          Signup
        </Button>
          <FormGroup controlId='confirmationCode' bsSize='large'>
            <Form.Label>Confirmation Code</Form.Label>
            <FormControl
              autoFocus
              type='tel'
              onChange={this.handleChange}
              value={this.state.confirmationCode}
            />
          </FormGroup>
          <Button
            block
            type='submit'
            bsSize='large'
            disabled={!this.validateForm()}>
            Verify
          </Button>
          
        </Form>
      </div>
    );
  }
}
