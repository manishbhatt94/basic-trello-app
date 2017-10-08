import React, { Component } from 'react';
import '../styles/card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card">
        <p className="card-text">{this.props.text}</p>
        <span className="controls">
          <i className="fa fa-pencil edit-card" title="Edit"></i>
          <i className="fa fa-trash delete-card" title="Delete"></i>
        </span>
      </div>
    );
  }
}

export default Card;
