import React, { Component } from 'react';
import '../styles/boardsList.css';

class BoardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBoardName: ''
    };
    this.openBoardView = this.openBoardView.bind(this);
    this.addNewBoard = this.addNewBoard.bind(this);
    this.onNewBoardNameChange = this.onNewBoardNameChange.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  openBoardView(event, boardId) {
    event.preventDefault();
    this.props.onBoardSelect(boardId);
  }

  addNewBoard() {
    this.props.onAddNewBoard(this.state.newBoardName);
    this.setState({
      newBoardName: ''
    });
  }

  deleteBoard(boardId) {
    this.props.onDeleteBoard(boardId);
  }

  onNewBoardNameChange(event) {
    this.setState({
      newBoardName: event.target.value
    });
  }

  render() {
    const { boards } = this.props;
    const { newBoardName } = this.state;

    return (
      <div className="BoardsList">
        <p className="heading">List of Boards:</p>
        <ul className="boards-list">
          {boards.map(board => (
            <li key={board.id} className="boards-list-item">
              <a href="#" className="board-tile" title="Open board"
                onClick={(event) => this.openBoardView(event, board.id)}>
                {board.name}
              </a>
              <i className="fa fa-times" title="Delete board"
                onClick={() => this.deleteBoard(board.id)}></i>
            </li>
          ))}
          <li className="boards-list-item add-new-board">
            <div className="input-section">
              <input type="text" className="input-field" value={newBoardName}
                onChange={this.onNewBoardNameChange}
                placeholder="Add a board" />
              <span className="controls">
                <i className="fa fa-check" title="Add board"
                  onClick={this.addNewBoard}></i>
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default BoardsList;
