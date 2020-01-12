import React from 'react';
import './ShopItem.scss';

const ShopItem = (props) => (
    <div className="shopItemWrapper">
        <div className="photoItem"><img src={props.image} alt="obrazek"/></div>
        <div className="detailsItem">
            <h3>{props.name}</h3>
            <span>{props.price} zł</span>
            <button>Dodaj do koszyka</button>
        </div>
    </div>
);

export default ShopItem;