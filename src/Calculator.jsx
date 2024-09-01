import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Using eval for simplicity; be cautious with its use
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-12 p-6 bg-black rounded-lg shadow-lg border border-orange-500">
      <h1 className="text-2xl font-bold text-orange-500 text-center mb-4">Calculator</h1>
      
      <div className="mb-4 p-4 bg-gray-900 text-white rounded-lg text-right text-2xl font-medium border border-gray-700">
        {input || '0'}
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <button onClick={() => handleClick('7')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">7</button>
        <button onClick={() => handleClick('8')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">8</button>
        <button onClick={() => handleClick('9')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">9</button>
        <button onClick={() => handleClick('/')} className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">/</button>
        
        <button onClick={() => handleClick('4')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">4</button>
        <button onClick={() => handleClick('5')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">5</button>
        <button onClick={() => handleClick('6')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">6</button>
        <button onClick={() => handleClick('*')} className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">*</button>
        
        <button onClick={() => handleClick('1')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">1</button>
        <button onClick={() => handleClick('2')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">2</button>
        <button onClick={() => handleClick('3')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">3</button>
        <button onClick={() => handleClick('-')} className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">-</button>
        
        <button onClick={handleClear} className="col-span-2 p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">C</button>
        <button onClick={() => handleClick('0')} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">0</button>
        <button onClick={() => handleClick('+')} className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">+</button>
        <button onClick={handleCalculate} className="col-span-4 p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">=</button>
      </div>
    </div>
  );
}

export default Calculator;
