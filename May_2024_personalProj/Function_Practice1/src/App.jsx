import  { useState } from 'react';
import  Function_practice from '../Function_practice.js'; 
import './App.css';

function MyComponent() { 
    const [result, setResult] = useState(null);

    const handleButtonClick = () => {
        const sum = Function_practice(sum);
        setResult(sum);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Click Me</button>
            {<p>Use the Inspect tool in Google Chrome: {result}</p>} 
        </div>
    );
}

export default MyComponent; // Changed to 'MyComponent'