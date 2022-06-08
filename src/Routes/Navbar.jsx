import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "2.5rem",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};
