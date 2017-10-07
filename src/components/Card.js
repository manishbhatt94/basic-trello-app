import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card">
        <p className="card-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
