import React from "react";
import "./ProductList.css";

function ProductList(props) {
  const { products, deleteProduct } = props;

  return (
    <ul className="ProductList">
      {products.map((product) => (
        <li key={product.id}>
          <span className="ProductList-name">{product.name}</span>
          <span className="ProductList-price">price :{product.price}</span>
          <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;