import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Nav = () => {
  const { status, handleChange } = useContext(AuthContext);

  return (
    <div className="cont">
      <div>
        <p>{status}</p>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            handleChange();
          }}
        >
          Change Status
        </button>
      </div>
    </div>
  );
};
