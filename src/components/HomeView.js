import React, { Component } from 'react';
import { string } from 'prop-types';

class HomeView extends Component {
  componentDidMount() {
    this.props.serverAddress()
  }

  render() {
    const { heading, server } = this.props;
    return (
      <div className="home">
        <h1>{heading}</h1>
        <h3>{`The development server usually runs at ${server}`}</h3>
      </div>
    )
  }
}

HomeView.propTypes = {
  heading: string
};

export default HomeView;
