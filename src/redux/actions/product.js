import axios from 'axios';

export const fetchProduct = () => (dispatch) => {
  axios
    .get('https://615f2094af3659001720487b.mockapi.io/items')
    .then((res) => dispatch(setProduct(res.data)));
};

export const setProduct = (products) => ({
  type: 'SET_PRODUCT',
  payload: products,
});

export const onChangeSelect = (object) => ({
  type: 'CHANGE_SELECT',
  payload: object,
});
