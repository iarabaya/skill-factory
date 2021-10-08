import React, { useState } from 'react';
import './form.css';

function ProductForm({ addProduct }) {
  const [formData, setFormData] = useState({
    title: '', price: '', description: '', category: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(formData);
    event.target.reset();
  };

  const productTitle = (event) => {
    const prodTitle = event.target.value;
    const product = { ...formData, title: prodTitle };
    setFormData(product);
  };

  const productPrice = (event) => {
    const prodPrice = event.target.value;
    const product = { ...formData, price: prodPrice };
    setFormData(product);
  };

  const productDescription = (event) => {
    const prodDescription = event.target.value;
    const product = { ...formData, description: prodDescription };
    setFormData(product);
  };

  const productCategory = (event) => {
    const prodCategory = event.target.value;
    const product = { ...formData, category: prodCategory };
    setFormData(product);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Form to add a product</h3>

        <label htmlFor="title">
          Title:
          <input type="text" name="title" placeholder="Title" onChange={productTitle} required />
        </label>

        <label htmlFor="price">
          Price:
          <input type="number" name="price" placeholder="Price" onChange={productPrice} required />
        </label>
        <label htmlFor="description">
          Description:
          <textarea name="description" placeholder="Description" onChange={productDescription} required />
        </label>

        <label htmlFor="category">
          Category:
          <input type="text" name="category" placeholder="Category" onChange={productCategory} required />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ProductForm;
