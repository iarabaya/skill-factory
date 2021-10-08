import React, { useState, useEffect } from 'react';
import { getAllProducts, postNewProduct } from '../../API';
import ProductForm from '../productForm/ProductForm';
import Product from '../product/Product';
import './catalog.css';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const productList = await getAllProducts();
      setProducts(productList);
    }

    fetchProducts();
  }, []);

  const showProducts = () => products.map((e) => <Product key={e.id} data={e} />);

  const addProduct = async (newProduct) => {
    // const newId = Math.max(...products.map((e) => e.id)) + 1;
    const { _id } = await postNewProduct(newProduct); // el post devuelve un id
    const newProductsList = [{ ...newProduct, id: _id, image: 'https://via.placeholder.com/300/09f/fff.png' }, ...products];
    setProducts(newProductsList);
  };

  const showForm = () => { setDisplayForm(!displayForm); };

  return (
    <>
      <button type="button" onClick={showForm}>Add a product</button>
      {displayForm ? <ProductForm addProduct={addProduct} /> : null}

      <h3>Here is a list of our products.</h3>
      <div className="list">
        {products ? showProducts() : <p>Loading products</p> }
      </div>
    </>
  );
}

export default Catalog;
