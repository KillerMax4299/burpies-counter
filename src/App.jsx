import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import "./App.css";

function App() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div className="bg-zinc-800 h-screen text-zinc-100 flex flex-col divide-y divide-zinc-700">
      <button className="h-1/5 text-4xl" onClick={() => setCount(0)}>
        Reset
      </button>
      <button
        className="h-4/5 text-[12rem]"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
