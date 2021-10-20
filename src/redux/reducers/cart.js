const initialState = {
  cartProduct: [],
};

const cartProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_PRODUCT':
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      };

    case 'REMOVE_CART_PRODUCT':
      const newItems = {
        ...state.cartProduct,
      };
      delete newItems[action.payload];
      return {
        ...state,
        cartProduct: newItems,
      };

    default:
      return state;
  }
};

export default cartProduct;