import React from 'react';
import './CartItem.scss';

const CartItem = ({
    image,
    name,
    price,
    count,
    shoppingCart,
    setShoppingCart,
    index,
}) => {
    
    const handleChange = (event) => {
        const newCount = event.target.value;
        const newShoppingCart = shoppingCart.map((item, itemIndex)=> {
            if(index === itemIndex) {
                return {...item, count:newCount}
            }
            return item;
        })
        setShoppingCart(newShoppingCart);
        localStorage.setItem('cart',JSON.stringify(newShoppingCart))
    }

    const deleteFromCart = () => {
        const Items=shoppingCart.filter( (item, itemIndex )=> {
            if (index === itemIndex){
                return false;
            }
            return true;
        })
        setShoppingCart(Items);
        localStorage.setItem('cart',JSON.stringify(Items))
    }
    
    return (
        <tr className="productItem">
            <td className="cart-table-cell">
                <img className="itemImage" src={image} alt="obrazek" />
            </td>
            <td className="cart-table-cell">{name}</td>
            <td className="cart-table-cell">
                <div className="shopCounter">
                    <input type='number' min='1' value={count} onChange={handleChange}/>
                </div>
            </td>
            <td className="cart-table-cell">{price.toFixed(2)} zł</td>
            <td className="cart-table-cell">{(count*price).toFixed(2)} zł</td>
            <td className="cart-table-cell"><button className="deleteBtn" type="button" onClick={deleteFromCart}>x</button></td>
        </tr>        
); 
};

export default CartItem;