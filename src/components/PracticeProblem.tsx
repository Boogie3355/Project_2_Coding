import * as React from 'react';
import { useState } from 'react';

const PracticeProblem = () => {
  const [code, setCode] = useState('');

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Problem: String Reversal</h2>
        <div className="prose">
          <p>Write a function that reverses a string.</p>
          <h3>Example:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            Input: "hello"
            Output: "olleh"
          </pre>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Solution</h3>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => {/* Add submission logic */}}
          >
            Submit
          </button>
        </div>
        <textarea
          className="w-full h-64 p-4 font-mono bg-gray-50 border rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
      </div>
    </div>
  );
};

export default PracticeProblem; 