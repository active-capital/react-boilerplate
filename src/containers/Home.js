import { connect } from 'react-redux';

import HomeView from '../components/HomeView';
import { wrapper } from '../utils/wrapper.js';

import { GET_SERVER_ADDRESS } from '../actions/_constants';

const mapStateToProps = state => ({
  immutables: state.get("home")
});

const mapDispatchToProps = dispatch => {
  return {
    serverAddress: () => dispatch({type: GET_SERVER_ADDRESS})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(wrapper(HomeView));
