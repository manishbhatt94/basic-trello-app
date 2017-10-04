import React, { Component } from 'react';
import '../styles/boardView.css';


class BoardView extends Component {
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
      <div className="BoardView">
        
      </div>
    );
  }
}

export default BoardView;
