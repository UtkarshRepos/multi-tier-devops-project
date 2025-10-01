🚀 Multi-Tier DevOps Project – CI/CD with GitHub Actions, Docker & AWS EC2
📌 Overview

This project demonstrates a multi-tier application deployment using DevOps practices.
It includes:

Frontend (React)

Backend (Node.js/Express)

Dockerized services

Automated CI/CD pipeline with GitHub Actions

Deployment to AWS EC2

The goal was to simulate a real-world DevOps workflow where every code push triggers build, test, and deployment steps automatically.

🛠️ Tech Stack

Frontend: React

Backend: Node.js / Express

Containerization: Docker & Docker Hub

CI/CD: GitHub Actions

Cloud Deployment: AWS EC2 (Ubuntu)

⚙️ CI/CD Pipeline Flow

Code Push (main branch)

Triggers GitHub Actions workflow

GitHub Actions

Builds Docker images (frontend + backend)

Pushes images to Docker Hub

AWS EC2

Pulls the latest Docker images

Runs containers to serve frontend & backend

📂 Project Structure
.github/workflows/        # CI/CD workflows (docker-ci-cd.yml)
frontend/                 # React frontend code
backend/                  # Node.js backend code

🔑 Secrets Used in GitHub Actions

DOCKER_USERNAME → Your Docker Hub username

DOCKER_PASSWORD → Your Docker Hub password/token

🚀 How to Run Locally
# Clone repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Run backend
cd backend
docker build -t backend-app .
docker run -p 5000:5000 backend-app

# Run frontend
cd ../frontend
docker build -t frontend-app .
docker run -p 3000:3000 frontend-app

✅ GitHub Actions successful run

✅ Docker Hub images (frontend + backend)

✅ Application running in browser (frontend + API check)

Example:

📊 Architecture Diagram
flowchart LR
    A[Developer] -->|Push Code| B[GitHub Actions]
    B -->|Build & Push| C[Docker Hub]
    C -->|Pull Images| D[AWS EC2]
    D -->|Run Containers| E[Frontend:3000]
    D -->|Run Containers| F[Backend:5000]

🎯 Key Learnings

Writing CI/CD pipelines with GitHub Actions

Building & pushing Docker images automatically

Deploying multi-tier apps on AWS EC2

Managing secrets securely in GitHub

✅ Status

This project is completed 🎉.
All workflows, Docker setup, and deployment steps have been tested successfully.
