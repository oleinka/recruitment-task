import React, { useState } from 'react';
import './App.scss';
import CartWrapper from '././components/CartWrapper/CartWrapper';
import ShopWrapper from '././components/ShopWrapper/ShopWrapper';

const App = () => {
  
  const [shoppingCart, setShoppingCart] = useState([])

return(
    <div className="App">
        <CartWrapper shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
        <ShopWrapper shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
    </div>
  );
}
export default App;
