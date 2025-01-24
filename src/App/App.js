import logo from '../logo.svg';
import './App.css';
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';

function App() {
  const [value1, setValue1] = useState(123);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isShow && <InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />}
        {isShow && <InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />}
        <a
          className="App-link"
          href="InputTest"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6485.576466455248!2d139.4488678962273!3d35.63294676046407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e3!4m3!3m2!1d35.6299255!2d139.4609106!4m5!1s0x6018fb551152372d%3A0x2971e4d1a53a97b!2z5p2x5Lqs6YO95aSa5pGp5biC5rC45bGx77yR5LiB55uu77yR77yY4oiS77yRIOS6rOeOi-awuOWxsemnhQ!3m2!1d35.630236499999995!2d139.4482672!5e0!3m2!1sja!2sjp!4v1736082281351!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <InputSwitch checked={isShow} onChange={(e) => setIsShow(e.value)} />
      </header>
    </div>
  );
}

export default App;
