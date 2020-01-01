import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'

import AddTipModal from '../components/AddTipModal.jsx';
import Banner from '../components/Banner.jsx';
import Search from '../components/Search.jsx';
import TagsBox from '../components/TagsBox.jsx';
import TipsContainer from './TipsContainer.jsx';


const mapDispatchToProps = dispatch => ({
  toggleAddTipsButton: () => {
    dispatch(actions.toggleAddTipsButton())
  },

}) 

const mapStateToProps = state => ({
  addTipsBoolean: state.people.toggleAddTipsButton
})

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='container'>
        {console.log("this is the dispatch to props: ", this.props.toggleAddTipsButton)}
        <Banner />
        <Search addTipsBoolean = { this.props.addTipsBoolean } toggleAddTipsButton = { this.props.toggleAddTipsButton } />
        <TagsBox />
        <TipsContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);