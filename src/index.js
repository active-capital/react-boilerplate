import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'

import configureStore, { history } from './store.js'
import registerServiceWorker from './registerServiceWorker'

import App from './containers/App'

const reloader = Component => (
    render(
        <Provider store={configureStore()}>
            <ConnectedRouter history={history}>
              <Component />
            </ConnectedRouter>
          </Provider>,
        document.getElementById('root')
    )
)

reloader(App);


// enable webpack's HMR
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        reloader(NextApp);
    });
}

registerServiceWorker();
