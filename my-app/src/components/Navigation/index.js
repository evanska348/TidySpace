import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavbarNav, NavLink } from 'mdbreact'

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Navbar color="teal" dark expand="md" scrolling>
    <NavbarBrand href="/home">
      <strong>TidySpace</strong>
    </NavbarBrand>
    <NavbarNav left>
      <NavItem>
        <NavLink className="nav-link waves-effect waves-light" to={ROUTES.HOME}>Spaces</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link waves-effect waves-light" to={ROUTES.TODOS}>Item Inventory</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link waves-effect waves-light" to={ROUTES.ACCOUNT}>Account</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink className="nav-link waves-effect waves-light" to={ROUTES.ADMIN}>Admin</NavLink>
      </NavItem> */}
      <NavbarNav right>
        <NavItem>
          <SignOutButton />
        </NavItem>
      </NavbarNav>
    </NavbarNav>
  </Navbar>
  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.HOME}>Home</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.TODOS}>Todos</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.ACCOUNT}>Account</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.ADMIN}>Admin</Link>
  //   </li>
  //   <li>
  //     <SignOutButton />
  //   </li>
  // </ul>
);

const NavigationNonAuth = () => (
  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //   </li>
  // </ul>
  <Navbar color="teal" dark expand="md" scrolling>
    <NavbarBrand>
      <strong>TidySpace</strong>
    </NavbarBrand>
  </Navbar>
);

export default Navigation;