/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Header, theme as themes, GlobalStyles } from '@sumup/circuit-ui';
import { Router } from '@reach/router';
import { ROUTES_PATH } from './constants/routes';

import Login from './pages/Login';
import Home from './pages/Home.js';

const NotFound = () => <div>Sorry, nothing here.</div>;

const { circuit } = themes;

const App = () => (
  <ThemeProvider theme={circuit}>
    <GlobalStyles
      custom={`
        body {
          background-color: ${circuit.colors.n100};
        }
      `}
    />
    <Header title="PEPE" />
    <Router>
      <Home path="/" />
      <Login path={ROUTES_PATH.LOGIN} />
      <NotFound default />
    </Router>
  </ThemeProvider>
);

export default App;
