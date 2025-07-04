import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      display: "flex", flexDirection: "column", alignItems: "center", marginTop: "48px" 
    }}>
      <h1>React Counter</h1>
      <div style={{ fontSize: "2em", margin: "20px" }}>{count}</div>
      <div>
        <button onClick={() => setCount(count - 1)} style={{ fontSize: "1.5em", marginRight: "20px" }}>–</button>
        <button onClick={() => setCount(count + 1)} style={{ fontSize: "1.5em" }}>+</button>
      </div>
    </div>
  );
}

export default App;