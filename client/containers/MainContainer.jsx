import React, { Component } from 'react';

import Nav from '../components/Nav.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='container'>
        <Nav />
      </div>
    )
  }
}

export default MainContainer;