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
    }

    const deleteFromCart = () => {
        const Items=shoppingCart.filter( (item, itemIndex )=> {
            if (index === itemIndex){
                return false;
            }
            return true;
        })
        setShoppingCart(Items);
    }
    
    return (
    <tr className="cartItemWrapper">
        <td>
            <img src={image} alt="obrazek" />
        </td>
        <td>{name}</td>
        <td>
            <div>
                <input type='number' min='1' value={count} onChange={handleChange}/>
            </div>
        </td>
        <td>{price}</td>
        <td>{count*price}</td>
        <td><button type="button" onClick={deleteFromCart}>x</button></td>
    </tr>
); 
};

export default CartItem;