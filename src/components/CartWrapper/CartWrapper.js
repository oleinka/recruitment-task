import React from 'react';
import './CartWrapper.scss';
import CartItem from '././CartItem/CartItem'

const CartWrapper = ({shoppingCart,setShoppingCart,isCartOpen,setIsCartOpen}) => {

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

  const NewArray = shoppingCart.map((item) => {
    return item.count*item.price;
  })

  return (
<div className="cartWrapper">
    <h1>Koszyk</h1>
    <button className="openCartBtn" onClick={toggleCart}>
     {getText()}
    </button>
    <div className={`productListWrapper ${ isCartOpen ? "" : "hidden"}`}>
      <table>
        <thead className={shoppingCart.length>=1 ? "": "hidden"}>
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
            <tr>
            <td className={`emptyCartInfo ${shoppingCart.length>=1 ? "hidden": ""}`}><p>Twój koszyk jest pusty</p></td>
            <td className="product">
            {shoppingCart.map((item, index) => (
            <CartItem key={item.name} {...item}
            setShoppingCart={setShoppingCart}
            index={index}
            shoppingCart={shoppingCart}
          />
          ))}</td>
          </tr>
        </tbody>
      </table>
    <div className="cartSummary">
      <span>Suma:</span>
      <div className="cartTotal">
      {NewArray.length >= 1 ? (NewArray.reduce((a, c) => a + c)).toFixed(2) : 0.0.toFixed(2)} zł
      </div>
    </div>
    </div>
</div>
);
}

export default CartWrapper;