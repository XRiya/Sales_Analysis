import React, { useState } from 'react';

const NumberManagement = () => {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState('');
  const handleFetchNumbers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/numbers?url=${urls}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data.urls.join(', '));
      } else {
        setResult('Error fetching numbers.');
      }
    } catch (error) {
      setResult('Error fetching numbers.');
    }
  };

  return (
    <div>
      <h1>Number Management</h1>
      <div>
        <label htmlFor="urls">Enter URLs:</label>
        <input
          type="text"
          id="urls"
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder="numbers"
        />
      </div>
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <p>Results:</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default NumberManagement;