import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">Password Reset Request</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
            </label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                type="email"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Email Reset</MDBBtn>
                <Link to={ROUTES.SIGN_IN}>
                  <MDBBtn color="unique" type="submit">Back to Login</MDBBtn>
                </Link>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     name="email"
      //     value={this.state.email}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <button disabled={isInvalid} type="submit">
      //     Reset My Password
      //   </button>

      //   {error && <p>{error.message}</p>}
      // </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };