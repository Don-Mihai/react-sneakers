import axios from 'axios';

export const fetchProduct = () => (dispatch) => {
  try {
    axios
      .get('https://615f2094af3659001720487b.mockapi.io/items')
      .then((res) => dispatch(setProduct(res.data)));
  } catch (error) {
    alert('Не удалось получить данные с сервера');
  }
};

export const setProduct = (products) => ({
  type: 'SET_PRODUCT',
  payload: products,
});

export const onChangeSelect = (object) => ({
  type: 'CHANGE_SELECT',
  payload: object,
});
