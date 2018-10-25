import React, { Component } from 'react';

export default class Orders extends Component {
  state = {
    chair: false,
    shoes: false,
    hat: false,
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
            <label htmlFor="chair">Chair</label>
            <input
              category="item"
              type="checkbox"
              checked={this.state.chair}
              name="chair"
              onChange={this.handleCartChange}
            />
          </div>
          <div>
            <label htmlFor="shoes">Shoes</label>
            <input
              category="item"
              type="checkbox"
              name="shoes"
              checked={this.state.shoes}
              onChange={this.handleCartChange}
            />
          </div>
          <div>
            <label htmlFor="hat">Hat</label>
            <input
              category="item"
              type="checkbox"
              name="hat"
              checked={this.state.hat}
              onChange={this.handleCartChange}
            />
          </div>

          <hr />

          <div>
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

        <hr />
      </div>
    );
  }
}
