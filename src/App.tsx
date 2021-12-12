import { useState } from 'react';
import './App.css';
import Countdown from 'react-countdown'

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Please wait a moment now</h1>
      <Countdown date={Date.now() + 300000} />
    </div>
  );
};
