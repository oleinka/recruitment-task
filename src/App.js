import React from 'react';
import './App.scss';

const App = () => (
    <div className="App">
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
      <div className="shop-wrapper">
        <div>
          <h1>Produkty</h1>
          <select name="sort" id="pet-select">
            <option value="">Sortuj</option>
            <option value="by-price">wg ceny</option>
            <option value="by-name">wg nazwy</option>
          </select>
        </div>
        <div className="shop-items-wrapper">
          <div>
            obraz
            Nazwa
            cena
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );

export default App;
