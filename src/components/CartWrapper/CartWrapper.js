import React, {useState} from 'react';
import './CartWrapper.scss';
import CartItem from '././CartItem/CartItem'

const CartWrapper = ({shoppingCart,setShoppingCart}) => {

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


  return (
<div className="cartWrapper">
    <h1>Koszyk</h1>
    <button className="openCartBtn" onClick={toggleCart}>
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
            <th>Razem</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          <tr className="productItem">
            {shoppingCart.map((item, index) => (
            <CartItem key={item.name} {...item}
            setShoppingCart={setShoppingCart}
            index={index}
            shoppingCart={shoppingCart}
          />
          ))}
          </tr>
        </tbody>
      </table>
    <div className="cartSummary">
      <span>Suma:</span>
      <div className="cartTotal">
      {shoppingCart.length >1 ? shoppingCart.reduce((a, c) => a.price*a.count + c.price*c.count).toFixed(2) : 0} zł
      </div>
    </div>
    </div>
</div>
);
}

export default CartWrapper;