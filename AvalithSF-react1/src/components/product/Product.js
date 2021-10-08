import React from 'react';
import './Product.css';

function Product({name, price, desc, stock}) {
    const availability = stock === true? 'Disponible': 'Agotado';

    return (
        <div className='product-card'>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>{desc}</p>
            <p>Stock:<span className={availability}> {availability}</span></p>
        </div>
    )
}

export default Product
