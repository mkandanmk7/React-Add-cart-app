import React from "react";
import "./cart.css";

const Nav = ({ cartCount }) => {
  return (
    <div className="navContainer">
      <h3>CartioCart</h3>
      <ul>
        <li>Home</li>
        <li>Offer Zone</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Order</li>
      </ul>
      <div className="cart">
        <button>
          <strong>Cart</strong> <span className="cartNo">{cartCount}</span>
        </button>
      </div>
    </div>
  );
};
export default Nav;
