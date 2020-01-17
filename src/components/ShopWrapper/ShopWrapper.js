import React, {useState} from 'react';
import './ShopWrapper.scss';
import ShopItem from './ShopItem/ShopItem';
import { products } from '../../data/products';

const ShopWrapper = ({shoppingCart,setShoppingCart}) => {
  
  const [productItems, setProductItems] = useState(products);

  const sortArray = (e) => {
    const value = e.target.value
    if (value === 'by-price') {
      setProductItems([...productItems.sort((a,b) => a.price-b.price)])
    }
    if (value === 'by-name') {
      setProductItems([...productItems.sort((a,b) =>{
        const aName = a.name.toUpperCase();
        const bName = b.name.toUpperCase();
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
       })])
    }
  }

return (
    <div className="shopWrapper">
        <div className="shopHeading">
          <h1>Produkty</h1>
          <select name="sort" onChange={sortArray}>
            <option value="">Sortuj</option>
            <option value="by-price">wg ceny</option>
            <option value="by-name">wg nazwy</option>
          </select>
        </div>
        <div className="shopItemsWrapper">
          {productItems.map(item => (
            <ShopItem key={item.name} {...item}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
          ))}
        </div>
    </div>
);
}

export default ShopWrapper; 