import React, { Component } from 'react';
import '../styles/App.css';
import AppContent from './AppContent';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Trello
        </div>
        <AppContent />
      </div>
    );
  }
}

export default App;
