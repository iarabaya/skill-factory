import React from 'react';
import './product.css';

function Product({ data }) {
  return (
    <div className="product-card">
      <h4>{data.title}</h4>
      <p>
        { `Category: ${data.category}` }
      </p>
      <div className="price-tag">
        { `Price: $${data.price}` }
      </div>
      <div className="description">
        {data.description}
      </div>
      <div className="image-container">
        <img src={data.image} alt={`${data.title}`} />
      </div>
      <div className="card-footer">
        <button type="button">Buy</button>
        <button type="button">Add to favorites</button>
      </div>
    </div>
  );
}

export default Product;
