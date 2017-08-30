import React, { Component } from 'react';
import { string } from 'prop-types';

class HomeView extends Component {
  render() {
    const { heading } = this.props;
    return (
      <h1>{heading}</h1>
    )
  }
}

HomeView.propTypes = {
  heading: string
};

export default HomeView;
