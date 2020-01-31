import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from '@sumup/circuit-ui';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { GoogleLogout } from 'react-google-login';
import { logUserOut } from '../../services/AuthenticationService';
import { ROUTES_PATH } from '../../constants/routes';
import { navigate } from '@reach/router';

import { ReactComponent as SumUpLogo } from '../../assets/sumup-logo.svg';

export const SIDEBAR_WIDTH = '256px';

const SidebarContainer = styled.div`
  ${({ theme }) => css`
    ${theme.mq.giga} {
      width: ${SIDEBAR_WIDTH};
      flex: 0 0 auto;
      min-height: 100vh;
    }
  `}
`;

const StyledSumUpLogo = styled(SumUpLogo)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    fill: '#ffffff';
    height: ${theme.iconSizes.mega};
    width: inherit;
  `};
`;

/**
 * Describe Navigation here.
 */
const Navigation = props => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([false, false]);

  const handleSelect = selectedIndex => {
    setSelected(selected.map((s, i) => i === selectedIndex));
  };

  const handleLogout = response => {
    logUserOut();
    navigate(ROUTES_PATH.LOGIN);
  };

  return (
    <SidebarContainer>
      <Sidebar
        open={open}
        onClose={() => setOpen(!open)}
        closeButtonLabel="close-button"
      >
        <Sidebar.Header>PEPE</Sidebar.Header>
        <Sidebar.NavList>
          <Sidebar.NavItem
            selected={selected[0]}
            onClick={() => handleSelect(0)}
            label="Item #1"
          />
          <Sidebar.NavItem
            selected={selected[1]}
            onClick={() => handleSelect(1)}
            label="Item #2"
          />
        </Sidebar.NavList>
        <Sidebar.Footer>
          <GoogleLogout
            clientId="742141911640-kgm6h0as97ussri97a677tf6b569arqg.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
            onFailed={handleLogout}
          />
          <br />
          <br />
          <StyledSumUpLogo fill="currentColor" />
        </Sidebar.Footer>
      </Sidebar>
    </SidebarContainer>
  );
};

Navigation.propTypes = {
  /**
   * A consice description of the example prop.
   */
  example: PropTypes.string
};

Navigation.defaultProps = {};

/**
 * @component
 */
export default Navigation;
