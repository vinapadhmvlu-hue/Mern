import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  }, []);


  return (
    <div>
      <h1>Product List</h1>
      <h4>(Prince Tiwari (T046))</h4>
      <hr />
      <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;


