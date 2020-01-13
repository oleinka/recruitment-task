import React from 'react';
import './ShopItem.scss';

const ShopItem = ({
    image,
    name,
    price,
}) => {
        return (<div className="shopItemWrapper">
            <div className="photoItem"><img src={image} alt="obrazek" /></div>
            <div className="detailsItem">
                <h3>{name}</h3>
                <span>{price} zł</span>
                <button>Dodaj do koszyka</button>
            </div>
        </div>);
    };

export default ShopItem;