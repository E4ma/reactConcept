
import './App.css';
import { useState } from 'react';
import Displayer from './Displayer';
import Adder from './Adder';

function App() {
  const [count, setCount] = useState(42);
  const [count2, setCount2] = useState(100001);
  // shift alt and down repeats the line your cursor is on

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={() => setCount((currentValue) => {return currentValue + 1})}>click me</button>
{/* instead of 'count + 1' using callback(a function) in setCount to avoid time lag */}
      <Displayer barney={count2} />
      <Adder lilAdder={setCount2} />
      </header>
     
    </div>
  );
}

export default App;
