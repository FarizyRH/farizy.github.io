import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

function App() {
  const targetDate = '2025-05-31T23:59:59'; // Format yang benar

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;