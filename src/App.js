import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleDecrease = () => {
    setCount((prev) => prev - 1)
  }

  const handleIncrease = () => {
    setCount((prev) => prev + 1)
  }

  const onClickDisabled = () => {
    setDisabled((prev) => !prev)
  }

  return (
    <div className="App">
      <header className="App-header">
       <h3 data-testId="counter">{count}</h3>
       <button disabled={disabled} data-testId="minus-button" onClick={handleDecrease}>-</button>
       <button disabled={disabled} data-testId="plus-button" onClick={handleIncrease}>+</button>
       <div>
        <button 
          style={{ backgroundColor: "blue" }}
          data-testId="on/off-button"
          onClick={onClickDisabled}
        >
          on/off
        </button>
       </div>
      </header>
    </div>
  );
}

export default App;
