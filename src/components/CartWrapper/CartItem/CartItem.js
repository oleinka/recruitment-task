import React, {useState} from 'react';
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
    }
    
    return (
    <tr className="cartItemWrapper">
        <td>{image}</td>
        <td>{name}</td>
        <td>
            <div>
                <input type='number' min='1' value={count} onChange={handleChange}/>
            </div>
        </td>
        <td>{price}</td>
        <td>{count*price}</td>
        <td>x</td>
    </tr>
); 
};

export default CartItem;