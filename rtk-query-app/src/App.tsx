import { useState } from "react";
import "./App.css"
import {
  useGetGoodsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from "./redux";

function App() {
  const [count, setCount] = useState("2");
  const [newProduct, setNewProduct] = useState("");
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct] = useAddProductMutation();
  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id).unwrap();
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={() => handleAddProduct()}>Add product</button>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map((item: { id: number; name: string }) => {
          return (
            <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
