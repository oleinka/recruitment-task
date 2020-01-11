import React from 'react';
import CartItem from '././CartItem/CartItem'

const CartWrapper = () => (
    <div className="Cart">
    <h1>Koszyk</h1>
    <button>Ukryj koszyk</button>
    <div>
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Nazwa</th>
            <th>Ilość</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CartItem/>
          </tr>
        </tbody>
      </table>
    </div>
    <div>Suma:</div>
  </div>
);

export default CartWrapper;