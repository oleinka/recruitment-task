import React from 'react';
import './ShopWrapper.scss';
import ShopItem from './ShopItem/ShopItem';
import { products } from '../../data/products';

const ShopWrapper = () => (
    <div className="shopWrapper">
        <div className="shopHeading">
          <h1>Produkty</h1>
          <select name="sort">
            <option value="">Sortuj</option>
            <option value="by-price">wg ceny</option>
            <option value="by-name">wg nazwy</option>
          </select>
        </div>
        <div className="shopItemsWrapper">
          <ShopItem
            image={products[0].image}
            name={products[0].name}
            price={products[0].price}
          />
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
          <ShopItem/>
        </div>
    </div>
);

export default ShopWrapper; 