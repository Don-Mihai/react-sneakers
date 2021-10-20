import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cart({ showCart, onRemoveItems }) {
  const items = useSelector(({ cart }) => cart.cartProduct);
  // if (cartItem.id === items.id) {
  // 	setSelect(!select)
  // }
  // где cartItem беру отсюда а items беру из списка всех продуктов
  return (
    <section className="cart">
      <div className="cart__container">
        <h3 className="cart__title">Корзина</h3>
        {items.length > 0 ? (
          <div className="cart__wrap">
            <div className="cart__items">
              {items.map((obj) => (
                <div className="cart__item" key={obj.id}>
                  <img
                    src={obj.img}
                    alt="product"
                    className="cart__img"
                    width="70"
                  />
                  <div className="cart__text">
                    <p className="cart__text-name">{obj.title}</p>
                    <span className="cart__text-price">{obj.price}</span>
                  </div>
                  <button
                    className="cart__item-btn"
                    onClick={() => onRemoveItems(obj)}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="7.5"
                        fill="white"
                        stroke="#DBDBDB"
                      />
                      <path
                        d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                        fill="#B5B5B5"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-cost">
                <span>Итого: </span>
                <span className="cart__dotted"></span>
                <span className="cart__bottom-total-price">21 498 руб. </span>
              </div>
              <Link to="/buy" className="cart__bottom-btn big-btn">
                Оформить заказ
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7H14.7143"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.71436 1L14.7144 7L8.71436 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <img src="/img/empty.jpg" alt="empty" width="120" height="120" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="cart-empty__big-btn big-btn" onClick={showCart}>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.7144 7L1.00007 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 13L1 7L7 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
