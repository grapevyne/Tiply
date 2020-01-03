import React, { Component } from 'react';

const TipComponent = (props) => {
  const tags = (props.tags.length === 0) ? <span>no tags</span> : props.tags.map((el, i) => (<div className="tag" key={`${el}Tag_${i}`}>{el}</div>));

  return (<div className="tip">
    <h2 className="header tip-piece">{props.header}</h2>
    <p className="blurb tip-piece">{props.blurb}</p>

    <div className="tags tip-piece">
      {props.tags.map((el, i) => (
        <div className="tag" key={`${el}Tag_${i}`}>{el}</div>
      ))}
    </div>

    <div className="votes tip-piece">
      <h2 onClick={() => { props.upvote(props.id) }} className="green">+</h2>
      <h1>{props.votes}</h1>
      <h2 onClick={() => { props.downvote(props.id) }} className="purple">-</h2>
    </div>
    <div className="timestamp tip-piece">{`${props.timestamp[0]}-${props.timestamp[1]}-${props.timestamp[2]}`}</div>
  </div>);
};

export default TipComponent;