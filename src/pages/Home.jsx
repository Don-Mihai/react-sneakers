import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import Cart from '../components/Cart';
import { fetchProduct, onChangeSelect } from '../redux/actions/product';
import { setCartProduct, removeItems } from '../redux/actions/cart';
import { useDispatch, useSelector } from 'react-redux';

// чтобы решить проблему правильного добавления и удаления товаров необходимо
// добавить редакс -> создать объект в которым буду передавать все данные и стэйт ->
// этот объект передавать в хранилище

// подумать по поводу того оставить ли продукт как есть или его тоже получать из стэйта сразу со значениями setSelect

// всё таки сделать стэйт зависимым от редакса, так я смогу синхронизировать значения из разных мест
export default function Home({ inputValue, setInputValue }) {
  const [togle, setTogle] = React.useState(false);

  const items = useSelector(({ product }) => product.product);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const showCart = () => {
    setTogle(!togle);
  };

  const changeSelect = (object) => {
    dispatch(onChangeSelect(object));
  };

  const addCartProduct = (obj) => {
    dispatch(setCartProduct(obj));
  };

  const onRemoveItems = (obj) => {
    dispatch(removeItems(obj));
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      {togle && <div onClick={showCart} className="overlay"></div>}
      <Header showCart={showCart}></Header>
      <main>
        <section className="smith">
          <div className="smith__slider">
            <h2 className="smith__title">
              Stan Smith
              <span>
                , <br />
                Forever!
              </span>
            </h2>
            <button className="smith__btn">КУПИТЬ</button>
          </div>
        </section>
        <section className="all">
          <div className="container">
            <div className="all__top">
              <div className="all__title">Все кроссовки</div>
              <div className="all__search">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                    stroke="#E4E4E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  type="text"
                  onChange={handleChange}
                  value={inputValue}
                  placeholder="Поиск..."
                />
              </div>
            </div>
            <div className="all__products">
              {items
                .filter((object) =>
                  object.title.toLowerCase().includes(inputValue.toLowerCase()),
                )
                .map((obj, index) => (
                  <Product
                    key={index}
                    id={obj.id}
                    title={obj.title}
                    price={obj.price}
                    img={obj.img}
                    changeSelect={() => changeSelect(obj)}
                    addCartProduct={() => addCartProduct(obj)}
                    onRemoveItems={() => onRemoveItems(obj)}></Product>
                ))}
            </div>
          </div>
        </section>
        {togle && <Cart showCart={showCart}></Cart>}
      </main>
    </div>
  );
}
