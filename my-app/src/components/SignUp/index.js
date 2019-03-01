import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     name="username"
      //     value={username}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Full Name"
      //   />
      //   <input
      //     name="email"
      //     value={email}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <input
      //     name="passwordOne"
      //     value={passwordOne}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Password"
      //   />
      //   <input
      //     name="passwordTwo"
      //     value={passwordTwo}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Confirm Password"
      //   />
      //   <button disabled={isInvalid} type="submit">Sign Up</button>

      //   {error && <p>{error.message}</p>}
      // </form>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Your name
                </label>
              <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
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
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
                </label>
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                type="password"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Confirm password
                </label>
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
                type="password"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Register
                  </MDBBtn>
                <Link style={{ color: "white" }} to={ROUTES.SIGN_IN}>
                  <MDBBtn color="unique">Back to log in</MDBBtn>
                </Link>
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };