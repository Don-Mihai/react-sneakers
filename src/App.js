import React from 'react';

import Cart from './components/Cart';
import Product from './components/Product';
import Header from './components/Header';

//сделал cart, передаю в нем пропсы но он не выводит в нем данные, тчобы разобрать в проблемме просмотреть видос.
// по сути всё должно работать но видимо не учел какие то моменты

function App() {
  const [togle, setTogle] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://615f2094af3659001720487b.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const onAddItems = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItems = (obj) => {
    const newItems = cartItems.filter((item) => item !== obj);
    setCartItems(newItems);
  };
  console.log(cartItems);

  const showCart = () => {
    setTogle(!togle);
  };

  return (
    <div className="wrapper">
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
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>
            <div className="all__products">
              {items.map((obj, index) => (
                <Product
                  key={index}
                  onPlus={() => onAddItems(obj)}
                  onRemove={() => onRemoveItems(obj)}
                  title={obj.title}
                  price={obj.price}
                  img={obj.img}></Product>
              ))}
            </div>
          </div>
        </section>
        {togle && (
          <Cart
            showCart={showCart}
            items={cartItems} // тут передаю данные
            onRemove={(obj) => onRemoveItems(obj)}></Cart>
        )}
      </main>
    </div>
  );
}

export default App;
