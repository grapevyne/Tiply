import React, { Component } from 'react';

import TipComponent from '../components/TipComponent.jsx';

class TipsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="tips-container">
        <TipComponent />
        <TipComponent />
        <TipComponent />
      </div>
    )
  }
}

export default TipsContainer;