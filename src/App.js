import React from 'react';
import './App.scss';
import CartWrapper from '././components/CartWrapper/CartWrapper';
import ShopWrapper from '././components/ShopWrapper/ShopWrapper';

const App = () => {

  const shoppingCart = []

return(
    <div className="App">
        <CartWrapper shoppingCart={shoppingCart} />
        <ShopWrapper/>
    </div>
  );
}
export default App;
