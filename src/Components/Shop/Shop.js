//Dependencies
import React from 'react';
//Internals
import AllItems from './ShopItem';
import './index.css';

const Shop = () => {
  return (
    <div className="itemsWrapper">
      <div className="itemsTitle">
        <h4>All Items</h4>
      </div>
      <AllItems />
    </div>
  );
}

export default Shop;
