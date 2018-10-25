import React, { Component } from 'react';

export default class DetailExpander extends Component {
  render() {
    const itemDetails = this.props.items.map((item, idx) => (
      <div key={idx}>
        <img src={item.img} alt="imgURL" />
      </div>
    ));

    return itemDetails;
  }
}
