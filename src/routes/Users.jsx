import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [state, dispatch] = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://reqres.in/api/users",
    })
      .then((res) => {
        setLoading(false);
        setdata(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>
        <u>Users Page</u>
      </h1>
      {state.token && <h2>Token : {state.token}</h2>}
      {loading && <div>...Loading</div>}
      {data?.data?.map((e) => (
        <div>
          <div>
            Name : {e.first_name}
            {e.last_name}
          </div>
          <div key={e.id}>Email : {e.email}</div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <Link to={`/user/${e.id}`}>See More</Link>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          dispatch({
            type: "LOGOUT_SUCCESS",
          });
        }}
      >
        Log Out
      </button>
    </div>
  );
}
