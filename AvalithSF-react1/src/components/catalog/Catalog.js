import React, { useState, useEffect } from 'react';
import Product from '../product/Product';   
import productsList from '../../data/productsJson';
import './Catalog.css';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        setProducts(productsList);
    },[]);

    const handleChange = () =>{
        setToggle(!toggle);
    }

    const showProducts = (condition) =>{
       if (condition){
            return products.filter(e => e.stock === true).map((e, index)=><Product key={index} name={e.name} price={e.price} desc={e.description} stock={e.stock}/>);
       } else{
            return products.map((e, index)=><Product key={index} name={e.name} price={e.price} desc={e.description} stock={e.stock}/>);
       }
    } 

    return (
        <div>
            <h3>Here is a list of our products.</h3>
            <label for="disponibles">Solo con stock disponible:
                <input name="disponibles" type="checkbox" checked={toggle} onChange={handleChange}/>
            </label>
                <div className='list'>
                    {showProducts(toggle)}
                </div>
        </div>
    )
}

export default Catalog;
