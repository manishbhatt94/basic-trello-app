import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardsList from '../components/BoardsList';
import { getBoards } from '../actions';

class BoardsListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleBoardSelect = this.handleBoardSelect.bind(null);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBoards());
  }

  handleBoardSelect(boardId) {
    this.props.onBoardSelect(boardId);
  }

  render() {
    const { boards } = this.props;

    return (
      <BoardsList onBoardSelect={this.handleBoardSelect} boards={boards} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boardsData.boards
  };
};

export default connect(mapStateToProps)(BoardsListContainer);
