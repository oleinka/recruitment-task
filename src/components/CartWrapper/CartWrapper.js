import React, {useState} from 'react';
import './CartWrapper.scss';
import CartItem from '././CartItem/CartItem'
import { products } from '../../data/products';

const CartWrapper = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  

  const toggleCart = () => {
    if(isCartOpen) {
      setIsCartOpen(false)
    }
    else {
      setIsCartOpen(true)
    }
  }

  const getText = () => {
    if(isCartOpen) {
     return "Ukryj koszyk"
    }
    else {
      return "Rozwiń koszyk"
    }
  }

  let productsInCart = [2,4,5,6]

  return (
<div className="cartWrapper">
    <h1>Koszyk</h1>
    <button onClick={toggleCart}>
     {getText()}
    </button>
    <div className={`productListWrapper ${ isCartOpen ? "" : "hidden"}`}>
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
      <div className="cartTotal">.....</div>
    </div>
    </div>
</div>
);
}

export default CartWrapper;