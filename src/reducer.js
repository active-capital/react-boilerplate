import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

// importing all reducers
import homeReducer from './reducers/home.reducer';

// main reducer combiner
export default combineReducers({
  routing: routerReducer,
  home: homeReducer
})
