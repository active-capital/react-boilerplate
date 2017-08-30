import { fromJS } from 'immutable';

const initialState = fromJS({
  heading: "This is boilerplate is packing heat"
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
