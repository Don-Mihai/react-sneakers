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
      console.log(newItems, 'state');
      console.log(action.payload, 'acion payload');
      newItems.forEach((value, key) => {
        console.log(action.payload.id, 'value');
        if (value.id === action.payload.id) {
          if (key === 0) {
            newItems = [];
          } else {
            newItems.splice(key, key);
          }
        }
      });
      console.log(action.payload, 'state deleted');
      return {
        ...state,
        cartProduct: newItems,
      };

    default:
      return state;
  }
};

export default cartProduct;
