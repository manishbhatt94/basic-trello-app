import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import '../styles/boardView.css';

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(event) {
    event.preventDefault();
    this.props.onBackToBoardsList();
  }

  render() {
    const { boardName, lists } = this.props;

    return (
      <div className="BoardView">
        <a href="#" className="back-btn" onClick={this.goBack}>
          Back to Boards List
        </a>
        <p className="board-name">{boardName}</p>
        <div className="lists-section">
          {lists.map(list => (
            <ListContainer key={list.id} listId={list.id}
              listName={list.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoardView;
