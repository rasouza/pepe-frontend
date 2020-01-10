import React from 'react';
import Login from './Login';

import { Router } from '@reach/router';
import { ROUTES_PATH } from '../constants/routes';

const NotFound = () => <div>Sorry, nothing here.</div>;

const Home = () => {
  return (
    <Router>
      <Login path={ROUTES_PATH.LOGIN} />
      <NotFound default />
    </Router>
  );
};

export default Home;
