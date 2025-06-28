import React, { useEffect, useState } from 'react';
import { fetchBatchAnalysis } from './api';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBatchAnalysis().then(setData);
  }, []);

  return (
    <div>
      <h2>Customer Sentiment Summary</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Sentiment</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.text}</td>
              <td>{item.sentiment}</td>
              <td>{item.score.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;