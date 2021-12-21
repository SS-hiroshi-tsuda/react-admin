import { useState } from 'react';
import './App.css';
import Countdown from 'react-countdown'

export const App = () => {
  
  return (
    <div className="App">
      <div className="container"><p style={{color: 'red'}}>www</p></div>
      <h1>Please wait a moment now</h1>
      <p className="wf-kokoro">少々お待ちください</p>
      <Countdown date={Date.now() + 300000} />
    </div>
  );
};
