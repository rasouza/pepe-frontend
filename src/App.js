/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Header, theme as themes, GlobalStyles } from '@sumup/circuit-ui';

import Home from './pages/Home.js';

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
    <Home />
  </ThemeProvider>
);

export default App;
