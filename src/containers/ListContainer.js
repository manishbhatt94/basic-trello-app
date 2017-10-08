import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { getCards, addCard } from '../actions';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.onAddNewCard = this.onAddNewCard.bind(this);
  }

  componentDidMount() {
    const { dispatch, listId } = this.props;
    dispatch(getCards(listId));
  }

  onAddNewCard(newCardText) {
    const { dispatch, listId } = this.props;
    const data = { text: newCardText, listId };
    dispatch(addCard(data));
  }

  render() {
    return (
      <List {...this.props} onAddNewCard={this.onAddNewCard} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cardsData.listToCardsMap[ownProps.listId] || []
  };
};

export default connect(mapStateToProps)(ListContainer);
