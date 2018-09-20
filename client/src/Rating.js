import React, { Component } from 'react';
import './Rating.css';
import Score from './Score';

class Rating extends React.Component {

  render() {
    return(
      <div className="rating">
        <Score value="1" />
        <Score value="2" />
        <Score value="3" />
        <Score value="4" />
        <Score value="5" />
        <Score value="6" />
        <Score value="7" />
        <Score value="8" />
        <Score value="9" />
        <Score value="10" />
      </div>
    );
  }
}

export default Rating;
