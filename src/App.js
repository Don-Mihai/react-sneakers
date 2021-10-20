import React from 'react';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import BuyProducts from './pages/BuyProducts';

function App() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="wrapper">
      <Route path="/buy" exact>
        <BuyProducts></BuyProducts>
      </Route>
      <Route path="/" exact>
        <Home inputValue={inputValue} setInputValue={setInputValue}></Home>
      </Route>
    </div>
  );
}

export default App;
