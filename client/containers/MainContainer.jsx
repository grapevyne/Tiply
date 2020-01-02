import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from '../components/Banner.jsx';
import Search from '../components/Search.jsx';
import TagsBox from '../components/TagsBox.jsx';
import TipsContainer from './TipsContainer.jsx';
import { getZipCode, upvote, downvote, getDummyTips, toggleAddTipsButton, selectTag, filterTipsByTag } from '../actions/actions';
import { fetchTips, fetchTags  } from '../actions/actionsFunctions'


const mapStateToProps = state => ({
  addTipsBoolean: state.tips.toggleAddTipsButton,
  zipCode: state.tips.zipCode,
  currentTips: state.tips.currentTips,
  tempTips: state.tips.tempTips,
  tagList: state.tips.tagList,
  tempTags: state.tips.tempTags,
});

const mapDispatchToProps = dispatch => ({
  getZipCode: (e) => {
    dispatch(getZipCode(e.target.value));
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
  toggleAddTipsButton: () => {
    dispatch(toggleAddTipsButton())
  },
  fetchTips: (zip) => { 
    dispatch(fetchTips(zip))
  },

  //TAGS
  selectTag: (tag) => {
    dispatch(selectTag(tag))
    dispatch(filterTipsByTag())
  },

  fetchTags: () => { 
    dispatch(fetchTags())
  },
})

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    //fetch tags when component mount:
    this.props.fetchTags();
    console.log("tagList: ", this.props.tagList)
  }

  render() {
    return (
      <div id='container'>
        <Banner />
        <Search
          toggleAddTipsButton={this.props.toggleAddTipsButton}
          addTipsBoolean={this.props.addTipsBoolean}
          getZipCode={this.props.getZipCode}
          getLocalTips={this.props.getLocalTips}
          zipCode={this.props.zipCode}
          tagList={this.props.tagList}
        />
        <TagsBox
          tagList={this.props.tagList}
          tempTags={this.props.tempTags}
          getTags={this.props.getTags}
          selectTag={this.props.selectTag}
          filterTipsByTag={this.props.filterTipsByTag}
          fetchTips={this.props.fetchTips}
          zipCode = {this.props.zipCode}
        />
        <TipsContainer
          currentTips={this.props.currentTips}
          tempTips={this.props.tempTips}
          getDummyTips={this.props.getDummyTips}
          upvote={this.props.upvote}
          downvote={this.props.downvote}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);