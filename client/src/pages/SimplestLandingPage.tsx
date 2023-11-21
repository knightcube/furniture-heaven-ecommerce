import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const SimplestLandingPage: React.FC = () => {
  return (
    <div>
      <HeaderNav/>
      <h1>Landing Page</h1>
      <ul>
        <NavLink to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/register">
          <li>Registration</li>
        </NavLink>
        <NavLink to="/login">
          <li>Log in</li>
        </NavLink>
        <NavLink to="/profile">
          <li>Profile</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/products/details/:id">
          <li>Product Details</li>
        </NavLink>
        <NavLink to="/cart">
          <li>Shopping Cart</li>
        </NavLink>
        <NavLink to="/checkout">
          <li>Checkout</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SimplestLandingPage;
