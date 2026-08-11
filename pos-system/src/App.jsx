import {useState}from "react";
import ProductList from "./components/ProductList";


function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>My POS System</h1>
      <ProductList setCart={setCart} />
      <h2>Cart</h2>

      <p>Items in cart: {cart.length}</p>
    </div>
  );
}

export default App;