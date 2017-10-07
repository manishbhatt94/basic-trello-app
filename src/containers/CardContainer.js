import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card text={this.props.cardText} />
    );
  }
}

export default connect()(CardContainer);
