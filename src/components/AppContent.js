import React, { Component } from 'react';
import BoardsListContainer from '../containers/BoardsListContainer';
import BoardViewContainer from '../containers/BoardViewContainer';

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoardId: null
    };
    this.handleBoardSelect = this.selectBoardId.bind(this);
    this.handleBackToBoardsList = this.selectBoardId.bind(this, null);
  }

  selectBoardId(boardId) {
    this.setState({
      selectedBoardId: boardId
    });
  }

  render() {
    const { selectedBoardId } = this.state;

    return (
      <div className="AppContent">
        {
          selectedBoardId ?
          <BoardViewContainer boardId={selectedBoardId}
            onBackToBoardsList={this.handleBackToBoardsList} /> :
          <BoardsListContainer onBoardSelect={this.handleBoardSelect} />
        }
      </div>
    );
  }
}

export default AppContent;
