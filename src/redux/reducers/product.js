const initialState = {
  product: [],
  isLoaded: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      const addedStateProduct = action.payload.map(function (obj) {
        obj.selectTogle = false;
        return obj;
      });
      return {
        ...state,
        product: addedStateProduct,
        isLoaded: true,
      };
    case 'CHANGE_SELECT':
      const newObj = action.payload;
      newObj.selectTogle = !newObj.selectTogle;
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default product;
