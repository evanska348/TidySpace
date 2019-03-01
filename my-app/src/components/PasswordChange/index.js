import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { AuthUserContext, withAuthorization } from '../Session';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     name="passwordOne"
      //     value={passwordOne}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="New Password"
      //   />
      //   <input
      //     name="passwordTwo"
      //     value={passwordTwo}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Confirm New Password"
      //   />
      //   <button disabled={isInvalid} type="submit">
      //     Reset My Password
      //   </button>

      //   {error && <p>{error.message}</p>}
      // </form>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onSubmit}>
              <p className="h4 mb-4">Account Username: {this.props.username}</p>
              <p className="h4 mb-4">Account Email: {this.props.email}</p>
              <p className="h4 mb-4">Change your password</p>

              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
                </label>
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="New Password"
                type="password"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
                </label>
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm New Password"
                type="password"
                className="form-control"
              />
              <div className="mt-4">
                <MDBBtn color="indigo" type="submit">Change Password</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withFirebase(PasswordChangeForm);