import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        setError(false), setData(res.data), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [params.id]);

  return (
    <div>
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
      <br />
      <img alt="icon" src={data?.image} width="200px" />
      <div>Product Name : {data?.name}</div>
      <div>Product Price : {data?.price}</div>
    </div>
  );
};
