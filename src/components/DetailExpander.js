import React, { Component } from 'react';
import './stylesheets/DetailExpander.css';

export default class DetailExpander extends Component {
  render() {
    const itemDetails = this.props.items.map((item, idx) => (
      <div className="itemDetail" key={idx}>
        <div className="itemImg">
          <img src={item.img} alt="imgURL" />
        </div>
        <div className="itemDescription">
          <span className="itemName">{item.itemName}</span>
          {this.props.discount > 0 ? (
            <span>
              <span className="super-bold">
                ${item.price * (1 - this.props.discount)}
              </span>
              <div>
                <strike style={{ color: 'grey' }} className="super-bold">
                  ${item.price}
                </strike>
              </div>
            </span>
          ) : (
            <span className="itemPrice super-bold">${item.price}</span>
          )}
          <span className="itemColor">color: {item.color}</span>
        </div>
      </div>
    ));

    return itemDetails;
  }
}
