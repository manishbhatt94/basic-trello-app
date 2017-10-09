import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { editCard, deleteCard } from '../actions';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.onSaveEditedCard = this.onSaveEditedCard.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
  }

  onSaveEditedCard(editedCardText) {
    const { cardId, listId, dispatch } = this.props;
    const data = {
      cardId,
      listId,
      payload: { text: editedCardText }
    };
    dispatch(editCard(data));
  }

  onDeleteCard() {
    const { cardId, listId, dispatch } = this.props;
    const data = { cardId, listId };
    dispatch(deleteCard(data));
  }

  render() {
    return (
      <Card text={this.props.cardText} onSaveEditedCard={this.onSaveEditedCard}
        onDeleteCard={this.onDeleteCard} />
    );
  }
}

export default connect()(CardContainer);
