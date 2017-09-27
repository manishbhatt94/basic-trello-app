import React, { Component } from 'react';
import BoardsList from './BoardsList';
import BoardView from './BoardView';


class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoardId: null
    };
  }

  render() {
    const { selectedBoardId } = this.state;

    return (
      <div className="AppContent">
        {
          selectedBoardId ?
          <BoardView boardId={selectedBoardId} /> :
          <BoardsList />
        }
      </div>
    );
  }
}

export default AppContent;
