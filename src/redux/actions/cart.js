export const onAddToCart = (product) => ({
  type: 'ON_ADD_TO_CART',
  payload: product,
});

export const removeItems = (obj) => ({
  type: 'REMOVE_CART_PRODUCT',
  payload: obj,
});

export const setCartProduct = (obj) => ({
  type: 'ADD_CART_PRODUCT',
  payload: obj,
});
