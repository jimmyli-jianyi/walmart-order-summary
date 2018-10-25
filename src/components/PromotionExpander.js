import React, { Component } from 'react';

export default class PromotionExpander extends Component {
  state = { promotionCode: '', correctDiscount: false };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.promotionCode.toLowerCase() === 'discount') {
      this.props.applyDiscount(0.1);
    }

    this.props.collapsePromotionBox();
  };

  handleS;
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="promotionCode">Promotion Code</label>
          </div>
          <input
            name="promotionCode"
            type="text"
            value={this.state.promotionCode}
            onChange={this.handleChange}
          />
          <button type="submit">Apply</button>
        </form>
      </div>
    );
  }
}
