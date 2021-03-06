import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { navigate } from '@reach/router';

import { Card, Text, Heading } from '@sumup/circuit-ui';

import { ROUTES_PATH } from '../../constants/routes';
import { logUserIn, isUserLogged } from '../../services/AuthenticationService';

import { ReactComponent as SumUpLogo } from '../../assets/sumup-logo.svg';

const Container = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Logo = styled(SumUpLogo)`
  ${({ theme }) => css`
    color: ${theme.colors.n900};
    fill: '#ffffff';
    height: ${theme.iconSizes.giga};
    width: inherit;
    margin-bottom: 2rem;
  `};
`;

const LoginCard = styled(Card)`
  width: 360px;
`;

function Login() {
  const [isLogged, setLogged] = useState(false);

  const responseGoogle = response => {
    logUserIn(response);
    setLogged(isUserLogged());
  };

  useEffect(() => {
    if (isLogged) {
      navigate(ROUTES_PATH.HOME);
    }
  });

  return (
    <Container>
      <Logo id="sumup-logo" />
      <LoginCard>
        <Heading size={Heading.KILO}>Pepe</Heading>
        <Text>Please sign in</Text>
        <GoogleLogin
          clientId="742141911640-kgm6h0as97ussri97a677tf6b569arqg.apps.googleusercontent.com"
          hostedDomain="sumup.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        ></GoogleLogin>
      </LoginCard>
    </Container>
  );
}

export default Login;
