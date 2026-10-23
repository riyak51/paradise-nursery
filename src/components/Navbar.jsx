import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
const cartItems = useSelector((state) => state.cart.items);

const totalItems = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return (
<nav
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
gap: "15px",
padding: "18px 30px",
backgroundColor: "#2e7d32",
color: "white",
}}
>
<Link
to="/"
style={{
color: "white",
textDecoration: "none",
fontSize: "24px",
fontWeight: "bold",
}}
>
🌿 Paradise Nursery </Link>


  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
    }}
  >
    <Link to="/" style={linkStyle}>
      Home
    </Link>

    <Link to="/plants" style={linkStyle}>
      Plants
    </Link>

    <Link to="/about" style={linkStyle}>
      About Us
    </Link>

    <Link to="/cart" style={linkStyle}>
      🛒 Cart ({totalItems})
    </Link>
  </div>
</nav>


);
}

const linkStyle = {
color: "white",
textDecoration: "none",
fontWeight: "bold",
};

export default Navbar;
