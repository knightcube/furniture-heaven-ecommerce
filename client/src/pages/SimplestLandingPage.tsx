import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const SimplestLandingPage: React.FC = () => {
  return (
    <div>
      <HeaderNav/>
      <h1>Landing Page</h1>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/register">
          <li>Registration</li>
        </Link>
        <Link to="/login">
          <li>Log in</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/details">
          <li>Product Details</li>
        </Link>
        <Link to="/cart">
          <li>Shopping Cart</li>
        </Link>
        <Link to="/checkout">
          <li>Checkout</li>
        </Link>
      </ul>
    </div>
  );
};

export default SimplestLandingPage;
