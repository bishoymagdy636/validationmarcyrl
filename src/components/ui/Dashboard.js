import { useState, useEffect } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [process, setProcess] = useState("");
  const [cleaning, setCleaning] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("validationData")) || {};
    setProducts(stored.products || []);
    setProcess(stored.process || "");
    setCleaning(stored.cleaning || "");
  }, []);

  const saveData = (newData) => {
    const data = {
      products,
      process,
      cleaning,
      ...newData
    };
    localStorage.setItem("validationData", JSON.stringify(data));
  };

  const addProduct = () => {
    if (newProduct.trim()) {
      const updated = [...products, newProduct];
      setProducts(updated);
      saveData({ products: updated });
      setNewProduct("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Marcyrl Validation System</h1>

      <input placeholder="New Product" className="border p-2 mb-2 w-full" value={newProduct} onChange={e => setNewProduct(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 mb-4" onClick={addProduct}>Add Product</button>

      <ul className="list-disc pl-5 mb-4">
        {products.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <textarea placeholder="Process Validation Details" className="border p-2 w-full mb-2" value={process} onChange={e => { setProcess(e.target.value); saveData({ process: e.target.value }); }} />

      <textarea placeholder="Cleaning Validation Details" className="border p-2 w-full" value={cleaning} onChange={e => { setCleaning(e.target.value); saveData({ cleaning: e.target.value }); }} />
    </div>
  );
}