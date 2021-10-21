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
      let newItems = [...state.cartProduct];
      console.log(newItems, 'create');

      newItems.forEach((value, key) => {
        if (value.id === action.payload.id) {
          newItems.splice(key, 1);
        }
      });
      console.log(newItems, 'finish');
      return {
        ...state,
        cartProduct: newItems,
      };

    default:
      return state;
  }
};

export default cartProduct;
