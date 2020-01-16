import React from 'react';
import './ShopWrapper.scss';
import ShopItem from './ShopItem/ShopItem';
import { products } from '../../data/products';

const ShopWrapper = () => {
  
  let productItems = products;

  

return (
    <div className="shopWrapper">
        <div className="shopHeading">
          <h1>Produkty</h1>
          <select name="sort">
            <option value="">Sortuj</option>
            <option value="by-price">wg ceny</option>
            <option value="by-name"/* onClick={productItems.sort((a,b)=>a.name-b.name)} */>wg nazwy</option>
          </select>
        </div>
        <div className="shopItemsWrapper">
          {productItems.map(item => (
            <ShopItem key={item.name} {...item}
          />
          ))}
        </div>
    </div>
);
}

export default ShopWrapper; 