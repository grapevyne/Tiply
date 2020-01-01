import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTipModal from '../components/AddTipModal.jsx';
import Banner from '../components/Banner.jsx';
import Search from '../components/Search.jsx';
import TagsBox from '../components/TagsBox.jsx';
import TipsContainer from './TipsContainer.jsx';

import { getZipCode, getLocalTips, upvote, downvote, getDummyTips } from '../actions/actions';

const mapStateToProps = state => ({
  zipCode : state.tips.zipCode,
  currentTips : state.tips.currentTips
});

const mapDispatchToProps = dispatch => ({
  getZipCode: (zipCode) => {
    dispatch(getZipCode(zipCode));
  },
  getLocalTips: () => {
    dispatch(getLocalTips());
  },
  upvote: (id) => {
    dispatch(upvote(id));
  },
  downvote: (id) => {
    dispatch(downvote(id));
  },
  getDummyTips: () => {
    dispatch(getDummyTips());
  },
});

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
        <TipsContainer
          currentTips={this.props.currentTips}
          getDummyTips={this.props.getDummyTips}
          upvote={this.props.upvote}
          downvote={this.props.downvote}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);