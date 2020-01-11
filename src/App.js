import React from 'react';
import './App.scss';
import CartWrapper from '././components/CartWrapper/CartWrapper';
import ShopWrapper from '././components/ShopWrapper/ShopWrapper';

const App = () => (
    <div className="App">
      <div>
        <CartWrapper/>
      </div>
      <div>
        <ShopWrapper/>
      </div>
    </div>
  );

export default App;
