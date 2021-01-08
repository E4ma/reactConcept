
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(42);

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={() => setCount(count + 1)}>click me</button>
      </header>
    </div>
  );
}

export default App;
