import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardsList from '../components/BoardsList';
import { getBoards, addBoard, deleteBoard } from '../actions';

class BoardsListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleBoardSelect = this.handleBoardSelect.bind(this);
    this.onAddNewBoard = this.onAddNewBoard.bind(this);
    this.onDeleteBoard = this.onDeleteBoard.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBoards());
  }

  onAddNewBoard(newBoardName) {
    const { dispatch } = this.props;
    const data = { name: newBoardName };
    dispatch(addBoard(data));
  }

  onDeleteBoard(boardId) {
    const { dispatch } = this.props;
    dispatch(deleteBoard(boardId));
  }

  handleBoardSelect(boardId) {
    this.props.onBoardSelect(boardId);
  }

  render() {
    const { boards } = this.props;

    return (
      <BoardsList onBoardSelect={this.handleBoardSelect} boards={boards}
        onAddNewBoard={this.onAddNewBoard}
        onDeleteBoard={this.onDeleteBoard} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boardsData.boards
  };
};

export default connect(mapStateToProps)(BoardsListContainer);
