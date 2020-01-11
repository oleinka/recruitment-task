import React from 'react';

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
            <td></td>
            <td>Biała sukienka</td>
            <td></td>
            <td>102,50 zł</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>Suma:</div>
  </div>
);

export default CartWrapper;