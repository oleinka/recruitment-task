import React from 'react';
import './ShopItem.scss';

const ShopItem = () => (
    <div className="shopItemWrapper">
        <div>obraz</div>
        <h5>Nazwa</h5>
        <span>Cena</span>
        <button>Dodaj do koszyka</button>
    </div>
);

export default ShopItem;