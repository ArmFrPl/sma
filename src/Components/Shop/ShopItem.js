//Dependencies
import React from 'react';
import map from 'lodash/map';
//Internals
import PRODUCTS from './Data';

const AllItems = () => (
  <div className="items">
    {
      map(PRODUCTS, (product)=> (
      <div key={product.id} className="item">

        <div className="productImg">
          <img alt={product.name} src={product.img} />
        </div>
        <div className="productDetails">
          <h1 id="productName">{product.name}</h1>
          <h4 id="productDescription">{product.description}</h4>
        </div>

        <div className="priceAdd">
          <h5 id="productPrice">${product.price}</h5>
        </div>
      </div>
    ))
    }
  </div>
);

export default AllItems;
