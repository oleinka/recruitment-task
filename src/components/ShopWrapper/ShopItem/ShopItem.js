import React from 'react';
import './ShopItem.scss';

const ShopItem = (props) => (
    <div className="shopItemWrapper">
        <div className="photoItem"><img src={props.image}/></div>
        <h5>{props.name}</h5>
        <span>{props.price}</span>
        <button>Dodaj do koszyka</button>
    </div>
);

export default ShopItem;