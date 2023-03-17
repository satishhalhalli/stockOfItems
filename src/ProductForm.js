import React, { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
  const { addProduct } = props;
  const [formValues, setFormValues] = useState({ id: "", name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: formValues.id,
      name: formValues.name,
      price: Number(formValues.price),
    };
    addProduct(newProduct);
    setFormValues({ id: "", name: "", price: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="ProductForm" onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={formValues.id} onChange={handleChange} />
      </label>
      <label>
        ProductName:
        <input type="text" name="name" value={formValues.name} onChange={handleChange} />
      </label>
      <label>
        SellingPrice:
        <input type="text" name="price" value={formValues.price} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;