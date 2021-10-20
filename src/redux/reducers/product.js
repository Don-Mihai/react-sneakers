const initialState = {
  product: [],
};

let addedStateProduct = [];

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      addedStateProduct = action.payload.map(function (obj) {
        obj.selectTogle = false;
        return obj;
      });
      return {
        ...state,
        product: addedStateProduct,
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
