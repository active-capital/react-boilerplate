import { connect } from 'react-redux';

import HomeView from '../components/HomeView';
import { wrapper } from '../utils/wrapper.js';


const mapStateToProps = state => ({
  immutables: state.get("home")
});

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(wrapper(HomeView));
