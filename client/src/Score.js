import React, { Component } from 'react';

class Score extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {
      selected: false,
    };
  }

  render() {
    return (
      <div className={"score-box">
        {this.props.value}
      </div>
    );
  }

}

export default Score;
