import {
  addToCart,
  calculateSubtotal,
  lookUpTax,
  calculateShippingFee
} from '../../helpers';

export const UPDATE_CART = 'UPDATE_CART';

export const UPDATE_SUBTOTAL = 'UPDATE_SUBTOTAL';

export const APPLY_DISCOUNT = 'APPLY_DSICOUNT';

export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';

export const UPDATE_TAX = 'UPDATE_TAX';

export const UPDATE_PICK_UP = 'UPDATE_PICK_UP';

export const UPDATE_SHIPPING_FEE = 'UPDATE_SHIPPING_FEE';

export function updateCart(payload) {
  return {
    type: UPDATE_CART,
    payload: addToCart(payload)
  };
}

export function updateSubtotal(payload) {
  return {
    type: UPDATE_SUBTOTAL,
    payload: calculateSubtotal(payload)
  };
}

export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    payload: zipcode
  };
}

export function updateTax(zipcode) {
  return {
    type: UPDATE_TAX,
    payload: lookUpTax(zipcode)
  };
}

export function updateShippingMethod(pickUp) {
  return {
    type: UPDATE_PICK_UP,
    payload: pickUp
  };
}

export function updateShippingFee(items) {
  return {
    type: UPDATE_SHIPPING_FEE,
    payload: calculateShippingFee(items)
  };
}

export function applyDiscount(discount) {
  return {
    type: APPLY_DISCOUNT,
    payload: discount
  };
}
