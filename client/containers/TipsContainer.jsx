import React, { Component } from 'react';

import TipComponent from '../components/TipComponent.jsx';

class TipsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="tips-container">
        {this.props.currentTips.map(el => (
          <TipComponent
            className='tip'
            key={el.id}
            id={el.id}
            header={el.header}
            blurb={el.blurb}
            timestamp={el.timestamp}
            zip={el.zip}
            votes={el.votes}
            tags={el.tags}
            upvote={this.props.upvote}
            downvote={this.props.downvote}
          />
        ))}
      </div>
    )
  }
}

export default TipsContainer;