from transformers import pipeline

# Load the sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis")

def analyze_sentiment(text: str):
    result = sentiment_pipeline(text)[0]
    label = result["label"].lower()  # POSITIVE, NEGATIVE, NEUTRAL
    score = float(result["score"])
    return label, score