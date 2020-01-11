import React from 'react';

const ShopWrapper = () => (
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
);

export default ShopWrapper; 