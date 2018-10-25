import React, { Component } from 'react';
import './DetailExpander.css';

export default class DetailExpander extends Component {
  render() {
    const itemDetails = this.props.items.map((item, idx) => (
      <div className="itemDetail" key={idx}>
        <div className="itemImg">
          <img src={item.img} alt="imgURL" />
        </div>
        <div className="itemDescription">
          <span className="itemName">{item.itemName}</span>
          <span className="itemPrice">
            <b>${item.price}</b>
          </span>
          <span className="itemColor">color: {item.color}</span>
        </div>
      </div>
    ));

    return itemDetails;
  }
}
