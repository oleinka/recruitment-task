import React from 'react';
import './CartItem.scss';

const CartItem = ({
    image,
    name,
    price,
}) => {
    
    const handleChange = (event) => {
        const count = event.target.value;
        console.log(count);
    }
    
    return (
    <tr className="cartItemWrapper">
        <td>{image}</td>
        <td>{name}</td>
        <td>
            <div>
                <input type='number' min='0' onChange={handleChange}/>
            </div>
        </td>
        <td>{price}</td>
        <td>x</td>
    </tr>
); 
};

export default CartItem;