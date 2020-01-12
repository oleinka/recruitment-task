import React from 'react';
import './CartWrapper.scss';
import CartItem from '././CartItem/CartItem'

const CartWrapper = () => (
<div className="cartWrapper">
    <h1>Koszyk</h1>
    <button id="cartBtn">Rozwiń koszyk</button>
    <div className="productListWrapper hidden" id="cartDetails">
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
    <div className="cartSummary">
      <span>Suma:</span>
      <div className="cartTotal">____</div>
    </div>
    </div>
</div>
);

export default CartWrapper;