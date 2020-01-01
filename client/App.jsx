import React, { Component } from 'react';

import MainContainer from './containers/MainContainer.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div style={{height:'100%'}}>
        <Provider store = { store } >
          <MainContainer />
        </Provider>
      </div>
    )
  }
}

export default App;
