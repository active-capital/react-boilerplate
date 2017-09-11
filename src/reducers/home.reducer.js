import { fromJS } from 'immutable';
import { PUT_SERVER_ADDRESS } from '../actions/_constants';

const initialState = fromJS({
  heading: "This boilerplate is packing heat",
  server: ''
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_SERVER_ADDRESS:
      return state.set('server', action.payload.address);
    default:
      return state;
  }
}

export default homeReducer;
