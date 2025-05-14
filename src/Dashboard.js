import { useState } from "react";

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
      <h1 style={{ color: "#004080" }}>MarcyrlValid - Validation System</h1>
      <input
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </main>
  );
}