import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import '../styles/boardView.css';

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListName: ''
    };
    this.goBack = this.goBack.bind(this);
    this.onNewListNameChange = this.onNewListNameChange.bind(this);
    this.addNewList = this.addNewList.bind(this);
  }

  goBack(event) {
    event.preventDefault();
    this.props.onBackToBoardsList();
  }

  onNewListNameChange(event) {
    this.setState({
      newListName: event.target.value
    });
  }

  addNewList() {
    this.props.onAddNewList(this.state.newListName);
    this.setState({
      newListName: ''
    });
  }

  render() {
    const { boardName, lists } = this.props;
    const { newListName } = this.state;

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
            <div className="add-list-box add-item-block">
              <div className="input-section">
                <input type="text" className="input-field" value={newListName}
                  placeholder="Add a list" onChange={this.onNewListNameChange} />
                <span className="controls">
                  <i className="fa fa-check fa-lg" title="Add list"
                    onClick={this.addNewList}></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardView;
