from flask import Flask, request, jsonify
import praw
import torch
from transformers import BertTokenizer, BertForSequenceClassification

app = Flask(__name__)

@app.route('/sentiment', methods = ['GET'])
def get_sentiment():
    sentiment = None
    post_url = request.args.get('url')
    print('URL:', post_url) 

    # Initialize the Reddit instance with your credentials
    reddit = praw.Reddit(client_id='iY3XCg5HEhpkzp9Khr5YwA',
                        client_secret='jMedkOq6izkJbKrkSENe19_HmjJjBg',
                        username='smj2173',
                        password='Balance831??',
                        user_agent='Mac:my_reddit_app:v1.0 by /u/smj2173',
                        verify=True)

    # Get the link to the post you want to scrape data from
    post = reddit.submission(url=post_url)

    # Extract the text content of the Reddit post
    post_text = post.selftext
    post_text = post_text[:512]

    # Load the pre-trained BERT tokenizer
    tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

    # Tokenize the text and convert it to a tensor
    inputs = tokenizer.encode_plus(post_text, add_special_tokens=True, return_tensors="pt")
    input_ids = inputs["input_ids"]
    attention_mask = inputs["attention_mask"]

    # Load your pre-trained BERT model
    model = BertForSequenceClassification.from_pretrained('/Users/maryamaziz/Desktop/Extension Code', from_tf=True)

    # Get the predicted sentiment of the post
    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_mask)
        logits = outputs[0]
        predicted_sentiment = torch.argmax(logits, dim=1).item()

    # Determine the sentiment based on the predicted sentiment value
    if predicted_sentiment == 0:
        sentiment = 'positive'
    elif predicted_sentiment == 1:
        sentiment = 'negative'

    # Return the sentiment as a JSON object
    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
