import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';
import { isUserLogged } from '../../services/AuthenticationService';
import { ROUTES_PATH } from '../../constants/routes';

/**
 * Describe ProtectedRoute here.
 */
const ProtectedRoute = ({ component: Component, path, ...props }) => {
  if (isUserLogged()) {
    return <Component path={path} {...props} />;
  }

  return <Redirect to={ROUTES_PATH.LOGIN} from={path} noThrow />;
};

ProtectedRoute.propTypes = {
  /**
   * A consice description of the example prop.
   */
  example: PropTypes.string
};

ProtectedRoute.defaultProps = {};

/**
 * @component
 */
export default ProtectedRoute;
