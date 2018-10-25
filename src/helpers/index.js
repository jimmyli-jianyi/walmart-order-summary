var items = require('../initialData.json').data;

export function calculateSubtotal(items) {
  let subtotal = 0;

  for (let item of items) {
    subtotal += item.price;
  }
  return subtotal;
}

export function applyDiscount(discount, subtotal) {
  return discount * subtotal;
}

export function addToCart(payload) {
  let arr = [];

  for (let item in items) {
    if (payload[item]) {
      arr.push(items[item]);
    }
  }

  return arr;
}

export function lookUpTax(zipcode) {
  switch (zipcode) {
    case '92122':
      return 0.0775;
    case '94134':
      return 0.085;
    case '94066':
      return 0.0875;
    default:
      return;
  }
}

export function calculateShippingFee(items) {
  return items.length * 5.0;
}
