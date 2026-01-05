/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const { ThemeProvider } = require('react-jss');
const theme = require('./src/settings/theme');

exports.wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
