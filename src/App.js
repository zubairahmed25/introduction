
import React, { useState } from "react";

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Zubair's first AWS React App using S3 and Cloudfront</h1>
      <h2>COUNTER APP</h2>
      <h3>You clicked {count} times!</h3>

      <button onClick={() => setCount(count - 1)}>Decrements</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


export default App; 
