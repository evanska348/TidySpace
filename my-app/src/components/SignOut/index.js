import React from 'react';
import * as ROUTES from '../../constants/routes';
import { NavLink } from 'mdbreact'
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <NavLink className="nav-link waves-effect waves-light" to={ROUTES.SIGN_IN} onClick={firebase.doSignOut}>Sign Out
  <i style={{paddingLeft: '5px'}} class="fa fa-sign-out" aria-hidden="true"></i>
  </NavLink>
  // <button
  //   style={{
  //     padding: 0, border: "none",
  //     font: "inherit", color: "inherit", backgroundColor: "transparent", cursor: "pointer"
  //   }}
  //   onClick={firebase.doSignOut}>
  //   Sign Out
  // </button>
);

export default withFirebase(SignOutButton);