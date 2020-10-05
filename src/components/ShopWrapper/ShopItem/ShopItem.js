import React from 'react';
import './ShopItem.scss';

const ShopItem = ({
    image,
    name,
    price,
    shoppingCart,
    setShoppingCart,
    setIsCartOpen,
}) => {

    const addToCart = () => {
        shoppingCart.push({image,name,price,count:1})
        setShoppingCart([...shoppingCart])
        setIsCartOpen(true)
        localStorage.setItem('cart',JSON.stringify(shoppingCart))
    }

    const handleCheckItem = () => {
        const names = shoppingCart.map(item => item.name);
        const found = names.find(item => item === name);
        return found;
    }

        return (<div className="shopItemWrapper">
            <div className="photoItem">
                <img src={image} alt="obrazek"/>
            </div>
            <div className="detailsItem">
                <h3>{name}</h3>
                <span>{price.toFixed(2)} zł</span>
                <button onClick={()=>handleCheckItem() === name? console.log('produkt jest już w koszyku') : addToCart() }>Dodaj do koszyka</button>
            </div>
        </div>);
    };

export default ShopItem;