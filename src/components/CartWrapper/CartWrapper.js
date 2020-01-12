import React from 'react';
import './CartWrapper.scss';
import CartItem from '././CartItem/CartItem'

const CartWrapper = () => (
<div className="cartWrapper">
    <h1>Koszyk</h1>
    <button>Ukryj koszyk</button>
    <div className="productListWrapper">
      <table>
        <thead>
          <tr className="tableHeadings">
            <th>Produkt</th>
            <th>Nazwa</th>
            <th>Ilość</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <CartItem/>
        </tbody>
      </table>
    </div>
    <div className="cartSummary">
      <div>Suma:</div>
      <div>____</div>
    </div>
</div>
);

export default CartWrapper;