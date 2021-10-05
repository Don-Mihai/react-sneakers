import React from 'react';

export default function Cart({ showCart }) {
  //передал тогле в картЮ теперь нужно поставить условие отображения тогле
  //убрать overlay из cart потому что не могу создать логику скрытия, и сделать его через absolute
  return (
    <section className="cart">
      <div className="cart__container">
        <h3 className="cart__title">Корзина</h3>
        <div className="cart__items">
          <div className="cart__item">
            <img
              src="/img/img1.jpg"
              alt="product"
              className="cart__img"
              width="70"
            />
            <div className="cart__text">
              <p className="cart__text-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <span className="cart__text-price">12 999 руб.</span>
            </div>
            <button className="cart__item-btn">x</button>
          </div>
          <div className="cart__item">
            <img
              src="/img/img1.jpg"
              alt="product"
              className="cart__img"
              width="70"
            />
            <div className="cart__text">
              <p className="cart__text-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <span className="cart__text-price">12 999 руб.</span>
            </div>
            <button className="cart__item-btn">x</button>
          </div>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-cost"></div>
          <button className="cart__bottom-btn">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
