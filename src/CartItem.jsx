import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./redux/CartSlice";

function CartItem() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

return ( <div className="product-page"> <h1 className="page-title">Your Shopping Cart</h1>


  {cartItems.length === 0 ? (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Your cart is empty!</h2>
      <p>Discover beautiful plants for your home.</p>
      <Link to="/plants">
        <button className="add-to-cart-btn">
          Continue Shopping
        </button>
      </Link>
    </div>
  ) : (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
            marginBottom: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
            flexWrap: "wrap",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <div style={{ flex: "1", minWidth: "150px" }}>
            <h2>{item.name}</h2>
            <p>Unit Price: ₹{item.price}</p>
            <p>
              Item Total: ₹{item.price * item.quantity}
            </p>
          </div>

          <div>
            <p>Quantity</p>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1,
                  })
                )
              }
              style={{ padding: "6px 12px", cursor: "pointer" }}
              aria-label={`Decrease ${item.name} quantity`}
            >
              −
            </button>

            <span style={{ margin: "0 12px" }}>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  })
                )
              }
              style={{ padding: "6px 12px", cursor: "pointer" }}
              aria-label={`Increase ${item.name} quantity`}
            >
              +
            </button>

            <br />

            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{
                marginTop: "12px",
                padding: "8px 12px",
                backgroundColor: "#c62828",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div
        style={{
          textAlign: "right",
          padding: "20px",
          backgroundColor: "#e8f5e9",
          borderRadius: "10px",
        }}
      >
        <h2>Total Amount: ₹{totalAmount}</h2>

        <button
          className="add-to-cart-btn"
          onClick={() => alert("Coming Soon!")}
          style={{ marginRight: "10px" }}
        >
          Checkout
        </button>

        <Link to="/plants">
          <button className="add-to-cart-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  )}
</div>


);
}

export default CartItem;
