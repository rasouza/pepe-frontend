/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Header, theme as themes, GlobalStyles } from '@sumup/circuit-ui';
import { Router, navigate } from '@reach/router';
import { ROUTES_PATH } from './constants/routes';
import { GoogleLogout } from 'react-google-login';

import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { isUserLogged, logUserOut } from './services/AuthenticationService';

const NotFound = () => <div>Sorry, nothing here.</div>;

const { circuit } = themes;

function App() {
  const [isLogged, setLogged] = useState(false);

  const handleLogout = response => {
    logUserOut();
    navigate(ROUTES_PATH.LOGIN);
  };

  if (!isUserLogged() && window.location.pathname !== ROUTES_PATH.LOGIN) {
    navigate(ROUTES_PATH.LOGIN);
  }

  return (
    <ThemeProvider theme={circuit}>
      <GlobalStyles
        custom={`
        body {
          background-color: ${circuit.colors.n100};
        }
      `}
      />
      <Header title="PEPE">
        {isUserLogged() && (
          <GoogleLogout
            clientId="742141911640-kgm6h0as97ussri97a677tf6b569arqg.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
            onFailed={handleLogout}
          ></GoogleLogout>
        )}
      </Header>
      <Router>
        <Login path={ROUTES_PATH.LOGIN} />
        <ProtectedRoute component={Home} path={ROUTES_PATH.HOME} />
        <NotFound default />
      </Router>
    </ThemeProvider>
  );
}

export default App;
