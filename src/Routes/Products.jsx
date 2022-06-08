import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setError(false), setData(res.data), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  console.log(data);
  return (
    <div>
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
      <br />
      {data?.map((e) => (
        <div key={e.id}>
          <div>Product Name : {e.name}</div>
          <div>Product Price : {e.price}</div>
          <Link to={`/products/${e.id}`}>See More</Link>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
