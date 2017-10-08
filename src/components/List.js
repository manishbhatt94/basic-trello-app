import React, { Component } from 'react';
import CardContainer from '../containers/CardContainer';
import '../styles/list.css';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listName, cards } = this.props;
    return (
      <div className="list">
        <div className="list-box">
          <div className="list-header">
            <span className="list-name">{listName}</span>
            <span className="controls">
              <i className="fa fa-pencil edit-list-name" title="Edit"></i>
              <i className="fa fa-trash delete-list" title="Delete"></i>
            </span>
          </div>
          <ul className="list-cards">
            {cards.map(card => (
              <li key={card.id}>
                <CardContainer cardId={card.id} cardText={card.text} />
              </li>
            ))}
          </ul>
          <div className="add-card">
            <div className="input-section">
              <textarea className="input-field" placeholder="Add a card"></textarea>
              <i className="fa fa-check fa-lg" title="Add card"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
