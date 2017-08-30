import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer'

export const history = createBrowserHistory()

const enhancers = []

const middleware = [
  routerMiddleware(history),
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
      composedEnhancers,
    )
  )

  // enable hot reloading of reducers
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducer', () => {
        const nextRootReducer = require('./reducer');
        store.replaceReducer(connectRouter(history)(nextRootReducer))
      })
    }
  }

  return store
}
/* eslint-enable */


// enable redux devtools
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}


export default configureStore;
