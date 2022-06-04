import React, { useEffect, useReducer } from "react";
import axios from "axios";

const init = {
  loading: true,
  error: false,
  data: null,
};

const githubactions = {
  fetch: "fetch",
  success: "success",
  failure: "failure",
};

const githubreducer = (state, action) => {
  switch (action.type) {
    case githubactions.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    }
    case githubactions.success: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case githubactions.error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export const Github = () => {
  const [{ loading, error, data }, dispatch] = useReducer(githubreducer, init);

  useEffect(() => {
    axios({
      url: "https://api.github.com/search/users",
      method: "GET",
      params: {
        q: "masai",
      },
    })
      .then((res) => {
        dispatch({
          type: githubactions.success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: githubactions.failure,
        });
      });
  }, []);

  return (
    <div>
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
      {data?.items.map((item) => (
        <div key={item.id}>{item.login}</div>
      ))}
    </div>
  );
};
