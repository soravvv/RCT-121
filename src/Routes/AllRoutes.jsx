import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { ProductsPage } from "./ProductsPage";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsPage />} />
      </Routes>
    </>
  );
};
