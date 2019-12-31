import React, { Component } from 'react';

import AddTipModal from '../components/AddTipModal.jsx';
import Banner from '../components/Banner.jsx';
import Search from '../components/Search.jsx';
import TagsBox from '../components/TagsBox.jsx';
import TipsContainer from './TipsContainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='container'>
        <Banner />
        <Search />
        <TagsBox />
        <TipsContainer />
      </div>
    )
  }
}

export default MainContainer;