import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({
      method: "GET",
      url: `https://reqres.in/api/users/${id}`,
    })
      .then((res) => {
        setLoading(false);
        setdata(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.id]);

  console.log(data);

  return (
    <div>
      <br />
      {loading && <div>...Loading</div>}
      <div>
        <img src={data?.data?.avatar} alt="icon" width="50px" />
        <div>
          Name : {data?.data?.first_name}
          {data?.data?.last_name}
        </div>
        <div key={data?.data?.id}>Email : {data?.data?.email}</div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        ></div>
      </div>
    </div>
  );
}
