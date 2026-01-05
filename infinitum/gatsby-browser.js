/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './src/settings/theme';

export const onRouteUpdate = ({ location, prevLocation }) => {
  const event = new CustomEvent(
    'route-change',
    { detail: { location, prevLocation } }
  );
  window.dispatchEvent(event);
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
