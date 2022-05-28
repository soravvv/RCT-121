import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import React from "react";

const gitHubUser = (q = "", page = 1) => {
  return axios("https://api.github.com/search/repositories", {
    method: "GET",
    params: {
      q,
      per_page: 5,
      page,
    },
  });
};

export const Github = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("masai");
  const [page, setPage] = useState(1);

  useEffect(() => {
    gitHubUser(query, page)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  }, [query, page]);
  //   console.log(data.items);

  const handleClick = (query) => setQuery(query);
  return (
    <div>
      <HandleText handleClick={handleClick} />
      <h2>GitHub Repositories</h2>
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
      {data?.items?.map((e) => (
        <GithubCard key={e.id} {...e} />
      ))}
      <br />
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
};

const HandleText = ({ handleClick }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick(text);
        }}
      >
        Search
      </button>
    </>
  );
};

const GithubCard = ({ name, owner, visibility }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        margin: "auto",
        display: "flex",
        gap: "2rem",
        padding: "10px",
      }}
    >
      <img src={owner.avatar_url} width="110px" alt={name} />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>Name: {name}</div>
        <div>Visibility: {visibility}</div>
      </div>
    </div>
  );
};
