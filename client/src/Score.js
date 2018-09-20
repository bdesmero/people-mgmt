import React, { Component } from 'react';
import classnames from 'classnames';

class Score extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({selected: true});
  }

  render() {
    return (
      <div className={classnames('score-box', {'selected': this.state.selected})} onClick={this.onClick}>
        {this.props.value}
      </div>
    );
  }

}

export default Score;
