import React from 'react';
import './CartItem.scss';

const CartItem = ({
    image,
    name,
    price
}) => {
    return (
    <tr className="cartItemWrapper">
        <td>{image}</td>
        <td>{name}</td>
        <td><div><input type='number'/></div></td>
        <td>{price}</td>
        <td>x</td>
    </tr>

); 
};


export default CartItem;