import PostList from "./components/PostList";
import List from "./components/List";
import useCounter from "./components/useCounter";
import React, { useCallback } from "react";

function App() {
  const { isLoading, count, increment, doubleCount } = useCounter(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double Count: {doubleCount}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
