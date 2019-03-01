import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div style={{marginLeft: "10vw"}}>
    <h1>Your Spaces</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);