import React, { Component } from 'react';

import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div style={{height:'100%'}}>
        <MainContainer />
      </div>
    )
  }
}

export default App;