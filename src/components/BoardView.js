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
        <div className="board-heading">
          <a href="#" className="back-btn" onClick={this.goBack}
            title="Back to Boards List">
            <i className="fa fa-arrow-circle-left fa-2x"></i>
          </a>
          <p className="board-name">{boardName}</p>
        </div>
        <div className="lists-section">
          {lists.map(list => (
            <ListContainer key={list.id} listId={list.id}
              listName={list.name}
            />
          ))}
          <div className="add-list list">
            <div className="add-list-box">
              <div className="input-section">
                <input type="text" className="input-field"
                  placeholder="Add a list" />
                <i className="fa fa-check fa-lg" title="Add list"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardView;
