import React from 'react';
import './App.scss';
import CartWrapper from '././components/CartWrapper/CartWrapper';
import ShopWrapper from '././components/ShopWrapper/ShopWrapper';

const App = () => {

  const shoppingCart = [{name:'jdhsj',price:10},{name:'polo',price:30}]

return(
    <div className="App">
        <CartWrapper shoppingCart={shoppingCart} />
        <ShopWrapper/>
    </div>
  );
}
export default App;
