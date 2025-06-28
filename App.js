import React, { useState } from 'react';
import { analyzeFeedback } from './api';
import Dashboard from './Dashboard';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (input.trim() !== '') {
      const res = await analyzeFeedback(input);
      setResult(res);
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Customer Sentiment Analyzer</h1>
      <div style={{ marginBottom: 24 }}>
        <textarea
          rows={4}
          cols={50}
          placeholder="Paste customer feedback here..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <br />
        <button onClick={handleAnalyze}>Analyze Sentiment</button>
      </div>
      {result && (
        <div>
          <strong>Sentiment:</strong> {result.sentiment} <br />
          <strong>Score:</strong> {result.score.toFixed(2)}
        </div>
      )}
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;