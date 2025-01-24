import './InputTest.css';
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

function App() {
  const [value1, setValue1] = useState(123);
  

  return (
    <div className="App">
      <header className="App-header">
        <InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />
        <InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
