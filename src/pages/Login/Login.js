import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Card, Text, Heading } from '@sumup/circuit-ui';

import { logUserIn, isUserLogged } from '../../services/AuthenticationService';

import { ReactComponent as SumUpLogo } from '../../assets/logo.svg';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Logo = styled(SumUpLogo)`
  ${({ theme }) => css`
    display: inline-block;
    fill: ${theme.colors.white};
    margin-bottom: 20px;
  `}
`;

const LoginCard = styled(Card)`
  width: 360px;
`;

function Login() {
  const [isLogged, setLogged] = useState(false);

  const responseGoogle = response => {
    console.log(response);
    logUserIn(response);
    setLogged(isUserLogged());
  };

  return (
    <Container>
      <Logo id="sumup-logo" />
      <LoginCard>
        <Heading size={Heading.KILO}>Pepe</Heading>
        <Text>Please sign in</Text>
        <GoogleLogin
          clientId="742141911640-kgm6h0as97ussri97a677tf6b569arqg.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        ></GoogleLogin>
      </LoginCard>
    </Container>
  );
}

export default Login;
