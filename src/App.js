import React, { useState } from 'react';
import './App.scss';
import CartWrapper from '././components/CartWrapper/CartWrapper';
import ShopWrapper from '././components/ShopWrapper/ShopWrapper';

const App = () => {
  
  const [shoppingCart, setShoppingCart] = useState(
    localStorage.getItem('cart') === null ? 
    [] : JSON.parse(localStorage.getItem('cart')));

  const [isCartOpen, setIsCartOpen] = useState(false);

return(
    <div className="App">
        <CartWrapper 
          shoppingCart={shoppingCart} 
          setShoppingCart={setShoppingCart} 
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}/>
        <ShopWrapper 
          shoppingCart={shoppingCart} 
          setShoppingCart={setShoppingCart}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          />
    </div>
  );
}
export default App;
