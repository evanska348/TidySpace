import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div style={{ marginLeft: "auto", marginRight: "auto", width: "60vw" }}>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     name="email"
      //     value={email}
      //     onChange={thygbis.onChange}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <input
      //     name="password"
      //     value={password}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Password"
      //   />
      //   <button disabled={isInvalid} type="submit">
      //     Sign In
      //   </button>

      //   {error && <p>{error.message}</p>}
      // </form>
      <MDBContainer className="text-center mt-4">
        <MDBRow>
          <MDBCol md="9">
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
          </label>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                type="email"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
          </label>
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                type="password"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
              </div>
              {error && <p>{error.message}</p>}
            </form>
            <div className="text-center mt-4">
              <PasswordForgetLink />
              <SignUpLink />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}



const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };