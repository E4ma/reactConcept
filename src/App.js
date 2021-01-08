
import './App.css';
import { useState } from 'react';
import Displayer from './Displayer';
import Adder from './Adder';

function App() {
  const [count, setCount] = useState(42);
  const [count2, setCount2] = useState(100001);
  let [colour, setColour] = useState('red');
  // shift alt and down repeats the line your cursor is on

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={() => setCount((currentValue) => { return currentValue + 1 })}>click me</button>
        {/* instead of 'count + 1' using callback(a function) in setCount to avoid time lag */}
        <Displayer barney={count2} headColour={colour} />
        <Adder lilAdder={setCount2}  colourSet={setColour} lilColour={colour} />
      </header>

    </div>
  );
}

export default App;
