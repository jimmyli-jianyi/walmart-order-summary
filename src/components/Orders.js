import React, { Component } from 'react';

export default class Orders extends Component {
  state = {
    chair1: false,
    chair2: false,
    chair3: false,
    zipcode: '',
    pickUp: false
  };

  handleCartChange = event => {
    this.setState({ [event.target.name]: event.target.checked }, () =>
      this.props.updateCart(this.state)
    );
  };

  handleZipcodeChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.props.updateZipcode(this.state.zipcode)
    );
  };

  handlePickUpOption = event => {
    this.setState({ [event.target.name]: event.target.checked }, () =>
      this.props.updateShippingMethod(this.state.pickUp)
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.items.length >= 1 && this.props.zipcode) {
      this.props.updateShippingFee(this.props.items);
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <p>Choose items to calculate subtotal: </p>
            <label htmlFor="chair1">Chair1</label>
            <input
              category="item"
              type="checkbox"
              checked={this.state.chair1}
              name="chair1"
              onChange={this.handleCartChange}
            />
          </div>
          <div>
            <label htmlFor="chair2">Chair2</label>
            <input
              category="item"
              type="checkbox"
              name="chair2"
              checked={this.state.chair2}
              onChange={this.handleCartChange}
            />
          </div>
          <div>
            <label htmlFor="chair3">Chair3</label>
            <input
              category="item"
              type="checkbox"
              name="chair3"
              checked={this.state.chair3}
              onChange={this.handleCartChange}
            />
          </div>

          <div>
            <p>Choose a zipcode to calculate shippings and tax: </p>
            <label htmlFor="zipCode">Zipcode</label>
            <div>
              <input
                type="radio"
                check={this.state.zipcode}
                value="94134"
                name="zipcode"
                onChange={this.handleZipcodeChange}
              />{' '}
              94134
            </div>
            <div>
              <input
                type="radio"
                check={this.state.zipcode}
                value="92122"
                name="zipcode"
                onChange={this.handleZipcodeChange}
              />{' '}
              92122
            </div>
            <div>
              <input
                type="radio"
                check={this.state.zipcode}
                value="94066"
                name="zipcode"
                onChange={this.handleZipcodeChange}
              />{' '}
              94066
            </div>
            <div>
              <p>Choose whether to pick up locally to save shippings: </p>
              <label htmlFor="pickUp">Pick up locally </label>
              <input
                type="checkbox"
                checked={this.state.pickUp}
                name="pickUp"
                onChange={this.handlePickUpOption}
              />{' '}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
