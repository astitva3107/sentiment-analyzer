const API_URL = 'http://localhost:8000';

export async function analyzeFeedback(text) {
  const response = await fetch(`${API_URL}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  return await response.json();
}

export async function fetchBatchAnalysis() {
  const response = await fetch(`${API_URL}/batch-analyze`);
  return await response.json();
}