'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  const addProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct.trim()]);
      setNewProduct("");
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>MarcyrlValid - Dashboard</h1>
      <input
        placeholder="Enter new product name"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((p, index) => <li key={index}>{p}</li>)}
      </ul>
    </main>
  );
}
