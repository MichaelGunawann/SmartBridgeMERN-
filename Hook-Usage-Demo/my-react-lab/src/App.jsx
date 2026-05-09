
import { useState, useEffect } from "react";
function App() {

  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title  = `Count ${count}`; 
    console.log('Effect ran, count=' , count); 
  }, [count]);
  return (
    <div className ="app">
      <h1> this is heading</h1>
      <p> Count : {count} </p> 
      <p> You clicked <strong> {count}</strong> times </p>
      <button onClick ={() => setCount(count+1)}
        disabled = {count >=10}
        > 
        {count<10? 'Increment' : 'Limit Reached'}
        </button>

        <button onClick={() => setCount(0)}>Reset</button> 
      </div>


  );
}

export default App;
