import { connect } from 'react-redux';
import OrderSummary from '../components/OrderSummary';
import { updateSubtotal, updateTax, applyDiscount } from '../store/actions';

function mapStateToProps(reduxState) {
  return {
    items: reduxState.items,
    subtotal: reduxState.subtotal,
    shippingFee: reduxState.shippingFee,
    tax: reduxState.taxRate,
    zipcode: reduxState.zipcode,
    pickUp: reduxState.pickUp,
    discount: reduxState.discount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSubTotal: items => dispatch(updateSubtotal(items)),
    updateTax: zipcode => dispatch(updateTax(zipcode)),
    applyDiscount: discount => dispatch(applyDiscount(discount))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
