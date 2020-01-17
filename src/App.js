import React, { useState } from 'react';
import './App.scss';
import CartWrapper from '././components/CartWrapper/CartWrapper';
import ShopWrapper from '././components/ShopWrapper/ShopWrapper';

const App = () => {
  
  const [shoppingCart, setShoppingCart] = useState([
    {image:"test",name:"test",price:10,count:1},
    {image:"test1",name:"test",price:10,count:1}
  ])

return(
    <div className="App">
        <CartWrapper shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
        <ShopWrapper/>
    </div>
  );
}
export default App;
