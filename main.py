from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import pandas as pd

from models import Feedback, SentimentResponse
from sentiment import analyze_sentiment

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze", response_model=SentimentResponse)
def analyze(feedback: Feedback):
    label, score = analyze_sentiment(feedback.text)
    return SentimentResponse(sentiment=label, score=score)

@app.get("/batch-analyze")
def batch_analyze():
    df = pd.read_csv("../data/sample_feedback.csv")
    sentiments = []
    for text in df['feedback']:
        label, score = analyze_sentiment(text)
        sentiments.append({"text": text, "sentiment": label, "score": score})
    return sentiments