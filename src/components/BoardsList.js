import React, { Component } from 'react';
import '../styles/boardsList.css';


class BoardsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boardsList = [
      { id: 'b1', name: 'My To Do Board' },
      { id: 'b2', name: 'Welcome Board' },
      { id: 'b3', name: 'Today\'s Agenda Board' }
    ];

    return (
      <div className="BoardsList">
        <p>List of Boards:</p>
        <ul className="boards-list">
          {boardsList.map(board => (
            <li key={board.id} className="boards-list-item">
              <a href="#" className="board-tile">{board.name}</a>
            </li>
          ))}
          <li className="boards-list-item add-new-board">
            <a href="#" className="board-tile">Create new board...</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BoardsList;
