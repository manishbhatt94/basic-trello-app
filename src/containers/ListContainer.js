import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { getCards, addCard, editList, deleteList } from '../actions';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.onAddNewCard = this.onAddNewCard.bind(this);
    this.onSaveEditedList = this.onSaveEditedList.bind(this);
    this.onDeleteList = this.onDeleteList.bind(this);
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

  onSaveEditedList(editedListName) {
    const { dispatch, listId } = this.props;
    const data = {
      listId,
      payload: { name: editedListName }
    };
    dispatch(editList(data));
  }

  onDeleteList() {
    const { dispatch, listId } = this.props;
    dispatch(deleteList(listId));
  }

  render() {
    return (
      <List {...this.props} onAddNewCard={this.onAddNewCard}
        onSaveEditedList={this.onSaveEditedList}
        onDeleteList={this.onDeleteList} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cardsData.listToCardsMap[ownProps.listId] || []
  };
};

export default connect(mapStateToProps)(ListContainer);
