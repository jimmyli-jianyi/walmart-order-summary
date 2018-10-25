import {
  UPDATE_CART,
  APPLY_DISCOUNT,
  UPDATE_SUBTOTAL,
  UPDATE_ZIPCODE,
  UPDATE_TAX,
  UPDATE_PICK_UP,
  UPDATE_SHIPPING_FEE
} from '../actions';

const DEFAULT_STATE = {
  items: [],
  subtotal: 0.0,
  taxRate: 0.0,
  shippingFee: 0.0,
  pickUp: false,
  zipcode: '',
  discount: 0.0
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_CART:
      return { ...state, items: action.payload };
    case APPLY_DISCOUNT:
      return { ...state, discount: action.payload };
    case UPDATE_SUBTOTAL:
      return { ...state, subtotal: action.payload };
    case UPDATE_ZIPCODE:
      return { ...state, zipcode: action.payload };
    case UPDATE_TAX:
      return { ...state, taxRate: action.payload };
    case UPDATE_PICK_UP:
      return { ...state, pickUp: action.payload };
    case UPDATE_SHIPPING_FEE:
      return { ...state, shippingFee: action.payload };
    default:
      return { ...state };
  }
}

export default rootReducer;
