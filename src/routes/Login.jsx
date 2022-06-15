import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export const Login = () => {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  if (state.auth) {
    return <Navigate to="/" />;
  }

  const loginUser = async () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    })
      .then((d) => {
        alert("Success");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: d.data.token,
        });
        navigate("/user");
      })
      .catch((err) => {
        alert("Failure");
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
      });
  };

  return (
    <div>
      <h1>
        <u>LogIn Page</u>
      </h1>
      <button onClick={loginUser}>SignIn</button>
    </div>
  );
};
