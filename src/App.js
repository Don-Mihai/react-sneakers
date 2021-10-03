import React from 'react';
import logo from './assets/logo.png';
import img1 from './assets/img1.jpg';
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container container">
          <a href="#" className="header__logo">
            <img src={logo} alt="logo" width="40px" height="40px" />
            <p className="header__text">
              <span className="header__text-top">REACT SNEAKERS</span>
              <span className="header__text-down">
                Магазин лучших кроссовок
              </span>
            </p>
          </a>

          <div className="header__icons">
            <div className="header__icons-price">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                  stroke="#9B9B9B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                  stroke="#9B9B9B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                  stroke="#9B9B9B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>1205 руб.</span>
            </div>
            <svg
              className="like"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                fill="#9B9B9B"
              />
            </svg>
            <svg
              className="user"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                fill="#9B9B9B"
              />
            </svg>
          </div>
        </div>
      </header>
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
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>
            <div className="all__products">
              <div className="product">
                <div className="product__icons">
                  <svg
                    className="liked"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="7" fill="#FEF0F0" />
                    <path
                      d="M21.1734 11.4592C20.9639 10.9779 20.6619 10.5418 20.2842 10.1753C19.9063 9.80769 19.4606 9.51555 18.9716 9.31477C18.4644 9.10575 17.9205 8.99876 17.3714 9.00001C16.601 9.00001 15.8493 9.20933 15.1961 9.60472C15.0399 9.6993 14.8914 9.80319 14.7508 9.91638C14.6101 9.80319 14.4617 9.6993 14.3054 9.60472C13.6522 9.20933 12.9006 9.00001 12.1302 9.00001C11.5754 9.00001 11.0378 9.10545 10.53 9.31477C10.0393 9.51634 9.59706 9.80629 9.21733 10.1753C8.83915 10.5414 8.53706 10.9776 8.32816 11.4592C8.11095 11.96 8 12.4918 8 13.0392C8 13.5555 8.10626 14.0935 8.31722 14.6409C8.49381 15.0983 8.74696 15.5727 9.07044 16.0519C9.58299 16.8101 10.2878 17.6008 11.1629 18.4025C12.613 19.7313 14.0491 20.6492 14.1101 20.6864L14.4804 20.9221C14.6445 21.026 14.8555 21.026 15.0196 20.9221L15.3899 20.6864C15.4509 20.6476 16.8854 19.7313 18.3371 18.4025C19.2122 17.6008 19.917 16.8101 20.4295 16.0519C20.753 15.5727 21.0077 15.0983 21.1828 14.6409C21.3937 14.0935 21.5 13.5555 21.5 13.0392C21.5015 12.4918 21.3906 11.96 21.1734 11.4592Z"
                      fill="#FF8585"
                    />
                  </svg>
                  <svg
                    className="unliked"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="0.5"
                      y="0.5"
                      width="29"
                      height="29"
                      rx="6.5"
                      fill="white"
                      stroke="#F8F8F8"
                    />
                    <path
                      d="M15.3899 20.6864C15.4509 20.6476 16.8854 19.7313 18.3371 18.4025C19.2122 17.6008 19.917 16.8101 20.4295 16.0519C20.753 15.5727 21.0077 15.0983 21.1828 14.6409C21.3937 14.0935 21.5 13.5555 21.5 13.0392C21.5015 12.4918 21.3906 11.96 21.1734 11.4592C20.9639 10.9779 20.6619 10.5418 20.2842 10.1753L15.3899 20.6864ZM15.3899 20.6864L15.0196 20.9221M15.3899 20.6864L15.0196 20.9221M20.7148 11.6585C20.5314 11.2373 20.267 10.8553 19.936 10.5341L19.9356 10.5337C19.6035 10.2108 19.2118 9.9539 18.7817 9.77731L18.781 9.77704C18.3348 9.59311 17.856 9.49891 17.3725 9.50001L17.3714 9.50001C16.6917 9.50001 16.0296 9.68466 15.4551 10.0325L15.455 10.0325C15.3176 10.1157 15.1874 10.2068 15.0643 10.3059L14.7508 10.5582L14.4373 10.3059C14.3142 10.2068 14.184 10.1157 14.0465 10.0325L14.0465 10.0325C13.4719 9.68466 12.8099 9.50001 12.1302 9.50001C11.6398 9.50001 11.1671 9.59299 10.7205 9.77705L10.72 9.77727C10.2882 9.95465 9.89974 10.2094 9.56579 10.5339L9.56511 10.5346L9.56511 10.5346C9.23393 10.8552 8.96959 11.2369 8.78688 11.6581L20.7148 11.6585ZM20.7148 11.6585C20.9048 12.0966 21.0013 12.5602 21 13.0377V13.0392C21 13.4865 20.9079 13.9636 20.7162 14.461L20.7158 14.4622C20.557 14.8772 20.3218 15.3178 20.0153 15.7718C19.5302 16.4894 18.854 17.2509 17.9995 18.0336C16.5792 19.3337 15.1726 20.232 15.1216 20.2645L15.1215 20.2646L14.7521 20.4996L14.7521 20.4996L14.7517 20.4998L14.75 20.5L14.7483 20.4998L14.7479 20.4996L14.7479 20.4996L14.3785 20.2646L14.3786 20.2645L14.3706 20.2597C14.371 20.2599 14.3705 20.2596 14.3691 20.2587C14.3666 20.2571 14.3612 20.2537 14.3522 20.248C14.3394 20.2398 14.3214 20.2282 14.2985 20.2133C14.2529 20.1835 14.1884 20.1409 14.1077 20.0864C13.9463 19.9774 13.7208 19.8211 13.4524 19.625C12.9146 19.2322 12.2084 18.6823 11.5007 18.0338L11.5006 18.0338C10.6462 17.2511 9.96994 16.4896 9.48483 15.7721L20.7148 11.6585ZM15.0196 20.9221C14.8555 21.026 14.6445 21.026 14.4804 20.9221H15.0196ZM8.5 13.0392C8.5 12.5605 8.59679 12.0964 8.78686 11.6581L8.78374 14.461C8.59204 13.9636 8.5 13.4865 8.5 13.0392ZM9.48481 15.772C9.17888 15.3189 8.94468 14.8778 8.78377 14.461L9.48481 15.772Z"
                      stroke="#ECECEC"
                    />
                  </svg>
                </div>

                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>

              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
              <div className="product">
                <img
                  src={img1}
                  alt="product"
                  className="product__img"
                  width="133"
                  height="112"
                />
                <p className="product__text">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="product__bottom">
                  <div className="product__price-wrap">
                    <div className="product__price-title">ЦЕНА:</div>
                    <div className="product__price">12 999 руб.</div>
                  </div>
                  <button className="product__btn">+</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cart overlay">
          <div className="cart__container">
            <h3 className="cart__title">Корзина</h3>
            <div className="cart__items">
              <div className="cart__item">
                <img
                  src={img1}
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
                  src={img1}
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
      </main>
    </div>
  );
}

export default App;
