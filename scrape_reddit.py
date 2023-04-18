import praw
import torch
from transformers import BertTokenizer, BertForSequenceClassification, BertConfig

# Initialize the Reddit instance with your credentials
reddit = praw.Reddit(client_id='wR1bOBPejs4v5grZsCk2ww',
                     client_secret='WSgVBz_Wlv0Cno4iXXwmv08eX3Zdwg',
                     username='adpat0324',
                     password='Krishrocks1',
                     user_agent='Mac:my_reddit_app:v1.0 by /u/adpat0324')

# Get the link to the post you want to scrape data from
post_url = input("Enter the link to the Reddit post: ")

# Extract the text content of the Reddit post
# only maintain first 512 words of the post
submission = reddit.submission(url=post_url)
post_content = submission.selftext
post_length = len(post_content)
if post_length > 512:
    post_text = post_content[:512] 
else:
    post_text = post_content

# Load the pre-trained BERT tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Tokenize the text and convert it to a tensor
inputs = tokenizer.encode_plus(post_text, add_special_tokens=True, return_tensors="pt")
input_ids = inputs["input_ids"]
attention_mask = inputs["attention_mask"]

# Load your pre-trained BERT model from a folder
model = BertForSequenceClassification.from_pretrained('pretrained_model/', from_tf=True)

# Get the predicted sentiment of the post
with torch.no_grad():
    outputs = model(input_ids, attention_mask=attention_mask)
    logits = outputs[0]
    predicted_sentiment = torch.argmax(logits, dim=1).item()

# Print the predicted sentiment of the post
if predicted_sentiment == 0:
    print("The sentiment of the post is positive.")
elif predicted_sentiment == 1:
    print("The sentiment of the post is negative.")