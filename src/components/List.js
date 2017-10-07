import React, { Component } from 'react';
import CardContainer from '../containers/CardContainer';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listName, cards } = this.props;
    return (
      <div className="list-box">
        <p>{listName}</p>
        <ul>
          {cards.map(card => (
            <li key={card.id}>
              <CardContainer cardId={card.id} cardText={card.text} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
