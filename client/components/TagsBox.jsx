import React, { Component } from 'react';

const TagsBox = (props) => (

  <div className="division tagsDiv">
        {props.tagList.map(el => {
          return <div className="tag" onClick={(e) => {props.selectTag(el); e.target.classList.toggle('selected')}}>{el}</div>
        })}
  </div>

);

export default TagsBox;