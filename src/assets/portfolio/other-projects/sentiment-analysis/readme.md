Project Description

This project is an end-to-end Social Media Sentiment Analysis Pipeline designed to classify tweet text as either Positive or Negative. It focuses on exploring text preprocessing techniques (especially preserving negation context like "not bad", "never", "no"), benchmarking traditional machine learning against deep learning architectures, and deploying an interactive web application for real-time inference.

Key Highlights
Preprocessing & Negation Handling: Cleans social media text (handles URLs, mentions, hashtags, and special characters) while preserving negations to prevent sentiment inversion.
Model Comparison:
Traditional ML: Logistic Regression and Linear Support Vector Classifier (LinearSVC) paired with TF-IDF vectorization.
Deep Learning: Bidirectional LSTM (BiLSTM) network trained with pre-trained 100-dimensional GloVe Twitter word embeddings.
Interactive Prototype: A responsive Gradio web application allowing users to input text, toggle between models, inspect cleaned text after preprocessing, and view sentiment predictions with confidence scores.
Tech Stack
Category	Tools & Libraries
Language	Python 3.10+
Deep Learning	TensorFlow, Keras / tf-keras (BiLSTM, Embedding layers, Sequence Padding)
Machine Learning	scikit-learn (Logistic Regression, LinearSVC, TF-IDF Vectorizer, Evaluation Metrics)
NLP & Embeddings	NLTK (Tokenization, Stopwords), Stanford GloVe (glove.twitter.27B.100d)
Data Processing	Pandas, NumPy
Data Visualization	Matplotlib, Seaborn
Web Interface	Gradio (HTML/CSS customized interface)
Serialization	Pickle, Keras HDF5/Native format (.keras)

https://huggingface.co/spaces/senazeleke/sentiment-analysis-capstone