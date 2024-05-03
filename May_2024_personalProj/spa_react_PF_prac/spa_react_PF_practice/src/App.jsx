// Practice with API's getting data and rendering to screen

import './App.css'
import { useState, useEffect } from 'react';

export default function App() {
  const [advice, setAdvice] = useState(''); // Initialize advice state

  const getAdvice = async () => {
    try { 
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <>
      <h1>Hello James</h1>
      <button onClick={getAdvice}>dont be done, get advice</button>
      {/* Display the advice below the button */}
      {advice && <p>{advice}</p>} 
    </>
  );
}



