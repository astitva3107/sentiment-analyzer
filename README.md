# AI-Powered Customer Sentiment Analyzer for Small Businesses

A web-based platform for small businesses to analyze and visualize customer sentiment from multiple feedback sources.

## Features

- Import customer feedback from CSV (emails, reviews, social media, support tickets)
- AI-powered sentiment analysis (positive/neutral/negative)
- Dashboard with sentiment trends and key insights

## Tech Stack

- Backend: FastAPI, Python, HuggingFace transformers
- Frontend: React.js
- Data: CSV

## Getting Started

### Backend

```bash
cd backend/app
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Usage

- Access the dashboard at [http://localhost:3000](http://localhost:3000)
- API runs at [http://localhost:8000](http://localhost:8000)

---