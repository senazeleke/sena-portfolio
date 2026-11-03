Ethiopian Highlands Landslide Susceptibility 
📌 Project Overview

An end-to-end machine learning and geospatial analytics system designed to predict landslide susceptibility across the Ethiopian highlands and retrospectively audit early warning feasibility, benchmarked against the catastrophic July 2024 Kencho Shacha Gozdi (Gofa Zone) disaster.

⚙️ What Was Built & Accomplished
Geospatial Feature Pipeline: Extracted multi-source environmental covariates (topography, geology, land cover, soil moisture, and daily satellite precipitation via Google Earth Engine, CHIRPS, and ERA5-Land) across ~12,000 spatial points.
Leakage-Free Spatial Evaluation: Implemented spatially buffered block cross-validation to prevent spatial autocorrelation leakage common in geospatial ML studies.
Multi-Model Suite:
Tabular ML: Headline XGBoost (AUC 0.880, F1 0.682) and Random Forest (AUC 0.875) for national susceptibility mapping.
Deep Learning: A custom CNN trained on multi-band spatial patches (AUC 0.807) and LSTM sequence models for antecedent rainfall dynamics.
Multimodal Ensembles: Weighted averaging and stacking architectures combining spatial and temporal features.
External & Operational Validation: Validated against independent international catalogs (NASA COOLR/GLC, Copernicus EMSN202) and conducted a rigorous retrospective early warning audit across 39 East African disasters.
Key Scientific Finding: While static spatial susceptibility is highly accurate (AUC 0.88), daily satellite rainfall percentiles cannot reliably pinpoint the exact day of failure under realistic false-alarm budgets (e.g., catching only ~36% of disasters at 10 false alarms/season), highlighting the real-world limitation of satellite-only early warning systems.
🚀 Deployed Web Application (Gradio on Hugging Face Spaces)
Interactive Risk Exploration: A lightweight decision-support tool that allows disaster managers and researchers to simulate environmental conditions and compare predictions across 6 distinct model architectures in real time.
Side-by-Side Model Auditing: Users can toggle between tabular models (XGBoost/RF), spatial deep learning (CNN), temporal sequence models (LSTM), and multimodal ensembles.
Transparency & Thresholds: Translates raw model probabilities into interpretable hazard tiers, false-alarm budgets, and alert trade-offs.
🛠️ Tech Stack
Languages & Frameworks: Python, Gradio, Scikit-Learn, XGBoost, TensorFlow / Keras, Pandas, NumPy.
Geospatial & Remote Sensing: Google Earth Engine (GEE), GDAL/Rasterio, CHIRPS Daily Precipitation, NASA COOLR / GLC, Copernicus EMSN202.
Deployment & Practices: Hugging Face Spaces, Git, Matplotlib / Seaborn.

https://huggingface.co/spaces/senazeleke/landslide