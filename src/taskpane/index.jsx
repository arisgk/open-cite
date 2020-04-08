import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { AppContainer } from 'react-hot-loader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
/* global document, Office */

initializeIcons();

let isOfficeInitialized = false;

const title = 'Contoso Task Pane Add-in';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component title={title} isOfficeInitialized={isOfficeInitialized} />
    </AppContainer>,
    document.getElementById('container'),
  );
};

/* Render application after Office initializes */
Office.initialize = () => {
  isOfficeInitialized = true;
  render(App);
};

/* Initial render showing a progress bar */
render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default; // eslint-disable-line global-require
    render(NextApp);
  });
}
