// This is a simple React component that demonstrates how to use the useEffect hook to perform 
// side effects in a functional component.

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs when count changes
  useEffect(() => {
    console.log("useEffect triggered");

    // side effect → changing browser tab title
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}