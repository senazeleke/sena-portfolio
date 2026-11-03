import landslideCover from '../assets/portfolio/other-projects/lanslide-susceptibility/cover.png';
import sentimentCover from '../assets/portfolio/other-projects/sentiment-analysis/cover.png';

export const OTHER_PROJECTS = [
  {
    id: 'landslide',
    title: 'Ethiopian Highlands Landslide Susceptibility',
    category: 'Machine Learning & Geospatial Analytics',
    tagline: 'Disaster early-warning auditing & susceptibility modeling',
    summary:
      'An end-to-end ML and geospatial analytics system predicting landslide susceptibility across the Ethiopian highlands, benchmarked against the July 2024 Kencho Shacha Gozdi disaster. Combines tabular ML (XGBoost, Random Forest), spatial CNN, and LSTM sequence models with spatially buffered cross-validation.',
    liveUrl: 'https://huggingface.co/spaces/senazeleke/landslide',
    src: landslideCover,
    tags: ['Python', 'XGBoost', 'TensorFlow', 'Google Earth Engine', 'Gradio', 'Hugging Face'],
  },
  {
    id: 'sentiment',
    title: 'Social Media Sentiment Analysis',
    category: 'Deep Learning & NLP Pipeline',
    tagline: 'Tweet sentiment classification with BiLSTM & GloVe',
    summary:
      'An end-to-end social media sentiment classification pipeline and interactive prototype comparing traditional ML (Logistic Regression, LinearSVC) against Bidirectional LSTM (BiLSTM) networks trained on 100D GloVe Twitter word embeddings with negation-preserving preprocessing.',
    liveUrl: 'https://huggingface.co/spaces/senazeleke/sentiment-analysis-capstone',
    src: sentimentCover,
    tags: ['Python', 'TensorFlow', 'BiLSTM', 'GloVe', 'Scikit-Learn', 'Gradio', 'Hugging Face'],
  },
];

