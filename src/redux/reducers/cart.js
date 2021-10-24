const initialState = {
  cartProduct: [],
  cartPrice: 0,
};

const getTotalPrice = (arr) =>
  arr.reduce((sum, obj) => +obj.price.replace(/\D/g, '') + sum, 0);

const cartProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_PRODUCT':
      const newProducts = [...state.cartProduct, action.payload];
      return {
        ...state,
        cartProduct: newProducts,
        cartPrice: getTotalPrice(newProducts),
      };

    case 'REMOVE_CART_PRODUCT':
      const newItems = [...state.cartProduct];

      newItems.forEach((value, key) => {
        if (value.id === action.payload.id) {
          newItems.splice(key, 1);
        }
      });

      return {
        ...state,
        cartProduct: newItems,
        cartPrice: state.cartPrice - +action.payload.price.replace(/\D/g, ''),
      };

    default:
      return state;
  }
};

export default cartProduct;
