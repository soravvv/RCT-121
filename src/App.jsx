import { useState } from "react";
import "./App.css";
import { Stopwatch } from "./components/Stopwatch";
import { Timer } from "./components/Timer";

function App() {
  const [page, setPage] = useState(false);

  return (
    <div className="App">
      {page ? <Stopwatch /> : <Timer />}
      <br />
      <button
        onClick={() => {
          setPage(!page);
        }}
      >
        {page ? "Timer" : "Stopwatch"}
      </button>
    </div>
  );
}

export default App;
