/**
 * Add custom Jest matchers for the DOM.
 * https://github.com/gnapse/jest-dom#table-of-contents
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { theme as themes } from '@sumup/circuit-ui';
const { circuit } = themes;

import serializer, { matchers } from 'jest-emotion';

/**
 * These matchers help you test agains specific style rules
 * in a test.
 *
 * https://github.com/emotion-js/emotion/tree/master/packages/jest-emotion#custom-matchers
 * */
// eslint-disable-next-line no-undef
expect.extend(matchers);

/**
 * The serializer will make sure emotion generated styles
 * show up in snapshots.
 *
 * https://github.com/emotion-js/emotion/tree/master/packages/jest-emotion#snapshot-serializer
 * */
// eslint-disable-next-line no-undef
expect.addSnapshotSerializer(serializer);

const WithProviders = ({ children }) => (
    <ThemeProvider theme={circuit}>{children}</ThemeProvider>
)

global.render = (component, options) =>
  render(component, { wrapper: WithProviders, ...options });
