import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { getCards } from '../actions';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, listId } = this.props;
    dispatch(getCards(listId));
  }

  render() {
    return (
      <List {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cardsData.listToCardsMap[ownProps.listId] || []
  };
};

export default connect(mapStateToProps)(ListContainer);
