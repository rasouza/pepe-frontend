/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { theme as themes, GlobalStyles } from '@sumup/circuit-ui';
import { Router, navigate } from '@reach/router';
import { ROUTES_PATH } from './constants/routes';

import LayoutContainer from './components/LayoutContainer';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/Navigation';
import { isUserLogged } from './services/AuthenticationService';

const NotFound = () => <div>Sorry, nothing here.</div>;

const { circuit } = themes;

const StyledRouter = styled(Router)`
  flex: 1;
  display: flex;
`;

function App() {
  const [isLogged, setLogged] = useState(false);

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
      <LayoutContainer>
        {isUserLogged() && <Navigation />}
        <StyledRouter>
          <Login path={ROUTES_PATH.LOGIN} />
          <ProtectedRoute component={Home} path={ROUTES_PATH.HOME} />
          <NotFound default />
        </StyledRouter>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
