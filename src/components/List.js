import React, { Component } from 'react';
import CardContainer from '../containers/CardContainer';
import '../styles/list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedListName: props.listName || '',
      isEditing: false,
      newCardText: ''
    };
    this.openEditView = this.openEditView.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.saveEditedList = this.saveEditedList.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.onEditTextChange = this.onEditTextChange.bind(this);
    this.onNewCardTextChange = this.onNewCardTextChange.bind(this);
  }

  openEditView() {
    this.setState({
      isEditing: true
    });
  }

  deleteList() {

  }

  saveEditedList() {

  }

  cancelEdit() {
    this.setState({
      editedListName: this.props.listName,
      isEditing: false
    });
  }

  addNewCard() {
    this.props.onAddNewCard(this.state.newCardText);
    this.setState({
      newCardText: ''
    });
  }

  onEditTextChange(event) {
    this.setState({
      editedListName: event.target.value
    });
  }

  onNewCardTextChange(event) {
    this.setState({
      newCardText: event.target.value
    });
  }

  render() {
    const { listName, cards } = this.props;
    const { isEditing, editedListName, newCardText } = this.state;

    return (
      <div className="list">
        <div className="list-box">
          <div className={"list-header editable-block" + (
            isEditing ? " is-editing" : ""
          )}>
            <div className="header-read-view read-view">
              <div className="heading-readonly">
                <span className="list-name">{listName}</span>
                <span className="controls">
                  <i className="fa fa-pencil edit-list-name" title="Edit"
                    onClick={this.openEditView}></i>
                  <i className="fa fa-trash delete-list" title="Delete"
                    onClick={this.deleteList}></i>
                </span>
              </div>
            </div>
            <div className="header-edit-view edit-view">
              <div className="input-section">
                <input type="text" className="input-field" value={editedListName}
                  onChange={this.onEditTextChange} />
                <span className="controls">
                  <i className="fa fa-check" title="Save"
                    onClick={this.saveEditedList}></i>
                  <i className="fa fa-times" title="Cancel"
                    onClick={this.cancelEdit}></i>
                </span>
              </div>
            </div>
          </div>
          <ul className="list-cards">
            {cards.map(card => (
              <li key={card.id}>
                <CardContainer cardId={card.id} cardText={card.text} />
              </li>
            ))}
          </ul>
          <div className="add-card add-item-block">
            <div className="input-section">
              <textarea className="input-field" placeholder="Add a card"
                value={newCardText} onChange={this.onNewCardTextChange}
              ></textarea>
              <span className="controls">
                <i className="fa fa-check fa-lg" title="Add card"
                  onClick={this.addNewCard}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
