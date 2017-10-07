import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardView from '../components/BoardView';
import { getLists } from '../actions';

class BoardViewContainer extends Component {
  constructor(props) {
    super(props);
    this.backToBoardsList = this.backToBoardsList.bind(this);
  }

  componentDidMount() {
    const { dispatch, boardId } = this.props;
    dispatch(getLists(boardId));
  }

  backToBoardsList() {
    this.props.onBackToBoardsList();
  }

  render() {
    return (
      <BoardView boardName={this.props.boardName}
        onBackToBoardsList={this.backToBoardsList}
        lists={this.props.lists}
      />
    );
  }
}

const getBoardName = (boardsList, boardId) => {
  const filteredBoards = boardsList.filter(board => board.id === boardId);
  return filteredBoards.length ? filteredBoards[0].name : '';
};

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.listsData.lists,
    boardName: getBoardName(state.boardsData.boards, ownProps.boardId)
  };
};

export default connect(mapStateToProps)(BoardViewContainer);
