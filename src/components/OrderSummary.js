import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/OrderSummary.css';
import DetailExpander from './DetailExpander';
import PromotionExpander from './PromotionExpander';

class OrderSummary extends Component {
  state = {
    expandDetail: false,
    expandPromotion: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.items.length !== prevProps.items.length) {
      this.props.updateSubTotal(this.props.items);
    } else if (this.props.zipcode !== prevProps.zipcode) {
      this.props.updateTax(this.props.zipcode);
    }
  }

  render() {
    let {
      items,
      discount,
      subtotal,
      shippingFee,
      zipcode,
      pickUp,
      tax
    } = this.props;

    const saving = subtotal * discount;

    subtotal = discount > 0.0 ? subtotal * (1 - discount) : subtotal;

    return (
      <div id="summary">
        <div id="order-summary">
          <div id="subtotal">
            <span className="text-right">
              <span className="text-right summary-text">Subtotal </span>
              <span className="text-right summary-text">
                ({<span className="super-bold">{items.length}</span>} items(s)):{' '}
              </span>
            </span>
            <span className="text-left">
              <span className="super-bold">${subtotal.toFixed(2)}</span>
            </span>
          </div>
          <div>
            <span className="summary-text">Discount saves you: </span>
            <span className="super-bold">${saving.toFixed(2)}</span>
          </div>
          <div>
            <span>
              {pickUp ? (
                <div className="pickup-tooltip">
                  <span className="summary-text">
                    <u>Pickup savings:</u>
                  </span>
                  <span className="tooltiptext">
                    Picking up order in the store helps cut costs, and we pass
                    the savings onto you.
                  </span>
                </div>
              ) : (
                <span className="summary-text">Shipping: </span>
              )}{' '}
            </span>
            <span className="super-bold">
              {pickUp ? (
                <span id="saving">
                  -$
                  {shippingFee}
                </span>
              ) : (
                `$${shippingFee}`
              )}
            </span>
          </div>
          <div>
            <span className="summary-text">Est. taxes & fees: </span>
            <span className="super-bold">${(tax * subtotal).toFixed(2)}</span>
            <div>
              <span className="summary-text">
                (Base on <u>{zipcode}</u>)
              </span>
            </div>
          </div>
          <hr />
          <div>
            <span className="super-bold">Est. total: </span>
            <span className="super-bold">
              {pickUp
                ? (subtotal * (1 + tax)).toFixed(2)
                : (subtotal * (1 + tax) + shippingFee).toFixed(2)}
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              this.setState({ expandDetail: !this.state.expandDetail })
            }
          >
            <span>
              {this.state.expandDetail ? (
                <span>
                  <u>Hide item Details</u> -
                </span>
              ) : (
                <span>
                  <u>See item details</u> +{' '}
                </span>
              )}
            </span>
          </button>
        </div>
        {this.state.expandDetail && (
          <DetailExpander items={items} discount={this.props.discount} />
        )}
        <div>
          <button
            onClick={() =>
              this.setState({ expandPromotion: !this.state.expandPromotion })
            }
          >
            <span>
              {this.state.expandPromotion ? (
                <span>
                  <u>Hide Promotion Code</u> -
                </span>
              ) : (
                <span>
                  <u>Apply Promotion Code</u> +{' '}
                </span>
              )}
            </span>
          </button>
        </div>
        {this.state.expandPromotion && (
          <PromotionExpander
            applyDiscount={discount => this.props.applyDiscount(discount)}
            collapsePromotionBox={() => {
              this.setState({
                expandPromotion: !this.state.expandPromotion
              });
            }}
          />
        )}
        <div>
          <span>
            {discount > 0 && <span>Current Discount: {discount * 100}%</span>}
          </span>
        </div>
        <div />
      </div>
    );
  }
}

OrderSummary.propTypes = {
  items: PropTypes.array.isRequired,
  subtotal: PropTypes.number.isRequired,
  shippingFee: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  zipcode: PropTypes.string,
  pickUp: PropTypes.bool.isRequired,
  discount: PropTypes.number
};

export default OrderSummary;
