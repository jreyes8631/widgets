import React, { useState } from 'react';  

function CountApp() {
  const [count, setCount] = useState(0);  

  return (
    <div className="App">
     <p>You clicked {count} times</p> 
     <button onClick={() => setCount(count + 1)}> 
       Click me  
     </button>
    </div>
  );
}

export default CountApp;
