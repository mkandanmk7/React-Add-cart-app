import "./App.css";
import Product from "./Components/Product";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  //initialization:

  const [items] = useState([
    {
      name: "Toy",
      price: "₹100",
      addedToCart: false,
    },
    {
      name: "Mouse",
      price: "₹700",
      addedToCart: false,
    },
    {
      name: "Keyboard",
      price: "₹1500",
      addedToCart: false,
    },
    {
      name: "HeadPhone",
      price: "₹9000",
      addedToCart: false,
    },
  ]);

  // cart Count details:

  const [cart, setCart] = useState(0); //by default cart value is 0;

  return (
    <div className="App">
      <Nav cartCount={cart} />
      <Product />
    </div>
  );
}

export default App;
