import React, { Component } from 'react';
import '../styles/card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedCardText: props.text || '',
      isEditing: false
    };
    this.openEditView = this.openEditView.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.saveEditedCard = this.saveEditedCard.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.onEditTextChange = this.onEditTextChange.bind(this);
  }

  openEditView() {
    this.setState({
      isEditing: true
    });
  }

  deleteCard() {

  }

  saveEditedCard() {

  }

  cancelEdit() {
    this.setState({
      editedCardText: this.props.text,
      isEditing: false
    });
  }

  onEditTextChange(event) {
    this.setState({
      editedCardText: event.target.value
    });
  }

  render() {
    const { isEditing, editedCardText } = this.state;

    return (
      <div className={"Card editable-block" + (isEditing ? " is-editing" : "")}>
        <div className="card-read-view read-view">
          <div className="card-readonly">
            <p className="card-text">{this.props.text}</p>
            <span className="controls">
              <i className="fa fa-pencil edit-card" title="Edit"
                onClick={this.openEditView}></i>
              <i className="fa fa-trash delete-card" title="Delete"
                onClick={this.deleteCard}></i>
            </span>
          </div>
        </div>
        <div className="card-edit-view edit-view">
          <div className="input-section">
            <textarea className="input-field" value={editedCardText}
              onChange={this.onEditTextChange}></textarea>
            <span className="controls">
              <i className="fa fa-check" title="Save"
                onClick={this.saveEditedCard}></i>
              <i className="fa fa-times" title="Cancel"
                onClick={this.cancelEdit}></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
