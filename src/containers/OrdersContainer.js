import { connect } from 'react-redux';
import Orders from '../components/Orders';
import {
  updateCart,
  updateZipcode,
  updateShippingMethod,
  updateShippingFee
} from '../store/actions';

function mapStateToProps(reduxState) {
  return {
    subtotal: reduxState.subtotal,
    zipcode: reduxState.zipcode,
    items: reduxState.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCart: payload => dispatch(updateCart(payload)),
    updateZipcode: zipcode => dispatch(updateZipcode(zipcode)),
    updateShippingMethod: pickup => dispatch(updateShippingMethod(pickup)),
    updateShippingFee: items => dispatch(updateShippingFee(items))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
