import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
const navigate = useNavigate();

return ( <div className="landing-page"> <div className="landing-content"> <h1>Paradise Nursery</h1>


    <p>
      Bring nature into your home with our beautiful collection of
      houseplants. Discover greenery that brightens your space and
      makes every day more refreshing.
    </p>

    <button
      className="get-started-btn"
      onClick={() => navigate("/plants")}
    >
      Get Started
    </button>
  </div>
</div>
```

);
}

function App() {
const [cart, setCart] = useState([]);

return ( <Routes>
<Route path="/" element={<Home />} />

```
  <Route
    path="/plants"
    element={
      <>
        <Navbar />
        <ProductList cart={cart} setCart={setCart} />
      </>
    }
  />

  <Route path="/about" element={<AboutUs />} />

  <Route
    path="/cart"
    element={
      <>
        <Navbar />
        <CartItem cart={cart} setCart={setCart} />
      </>
    }
  />
</Routes>


);
}

export default App;
