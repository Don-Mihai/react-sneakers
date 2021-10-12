import React from 'react';
import Home from './pages/Home';
import axios from 'axios';
import { Route } from 'react-router-dom';
import BuyProducts from './pages/BuyProducts';

//сделать роутинг по разным страницам

// ошибка с тем что отображаются разные айди связано с тем что мы не дожидаемся ответа от бэкэнда
// поэтому нужно сделать метод then

// попроьовать еще раз синхронизировать удаление товаров и селект

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  React.useEffect(() => {
    axios
      .get('https://615f2094af3659001720487b.mockapi.io/items')
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="wrapper">
      <Route path="/buy" exact>
        <BuyProducts></BuyProducts>
      </Route>
      <Route path="/" exact>
        <Home
          cartItems={cartItems}
          setCartItems={setCartItems}
          inputValue={inputValue}
          setInputValue={setInputValue}
          items={items}></Home>
      </Route>
    </div>
  );
}

export default App;
