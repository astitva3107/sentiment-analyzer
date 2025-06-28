from pydantic import BaseModel

class Feedback(BaseModel):
    text: str

class SentimentResponse(BaseModel):
    sentiment: str
    score: float