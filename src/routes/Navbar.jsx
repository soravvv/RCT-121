import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2.5rem",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user">User</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export { Navbar };
