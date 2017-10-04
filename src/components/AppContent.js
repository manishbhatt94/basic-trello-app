import React, { Component } from 'react';
import BoardsList from './BoardsList';
import BoardView from './BoardView';


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
          <BoardView boardId={selectedBoardId}
            onBackToBoardsList={this.handleBackToBoardsList} /> :
          <BoardsList onBoardSelect={this.handleBoardSelect} />
        }
      </div>
    );
  }
}

export default AppContent;
