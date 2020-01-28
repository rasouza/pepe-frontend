import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, queryByTestId, wait } from '@testing-library/react';

import ProtectedRoute from './ProtectedRoute';

jest.mock('../../services/AuthenticationService');

const authentication = require('../../services/AuthenticationService');

describe('ProtectedRoute', () => {
  it('renders Redirect when user is not authenticated', async () => {
    authentication.isUserLogged = jest.fn(() => false);
    const DummyComponent = () => <div data-testid="dummy">Dummy Component</div>;

    const { container } = render(
      <MemoryRouter>
        <ProtectedRoute component={DummyComponent} path="/" />
      </MemoryRouter>
    );
    await wait(() => {
      expect(queryByTestId(container, 'dummy')).toBeFalsy();
    });
  });

  it('renders Dummy when user is authenticated', async () => {
    authentication.isUserLogged = jest.fn(() => true);
    const DummyComponent = () => <div data-testid="dummy">Dummy Component</div>;

    const { container } = render(
      <MemoryRouter>
        <ProtectedRoute component={DummyComponent} path="/" />
      </MemoryRouter>
    );

    await wait(() => {
      expect(queryByTestId(container, 'dummy')).toBeTruthy();
    });
  });
});
