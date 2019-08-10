import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import InfoService from './services/info-services';
import { InfoServiceProvider } from './components/info-service-context';

import store from './store';

const infoListService = new InfoService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <InfoServiceProvider value={infoListService}>
        <Router>
          <App />
        </Router>
      </InfoServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);