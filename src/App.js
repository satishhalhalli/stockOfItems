import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      setProducts([
        { id: 1, name: "iphone 10", price: 40000 },
        { id: 2, name: "Sony Playstation 5", price: 30000 },
        { id: 3, name: "Sony Playstation 3", price: 30000 },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="App">
      <h1>ProductsList</h1>
      <ProductList products={products} deleteProduct={deleteProduct} />
      <ProductForm addProduct={addProduct} />
      <p>Total Value Worth of Products: Rs {products.reduce((acc, cur) => acc + cur.price, 0)}</p>
    </div>
  );
}

export default App;