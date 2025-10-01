🚀 Multi-Tier DevOps Project
📖 Overview

This project is a multi-tier web application deployed on AWS EC2 using Docker Compose and automated with GitHub Actions CI/CD.
It demonstrates how to build, containerize, and deploy a full-stack app (React frontend, Node.js backend, PostgreSQL database) with monitoring, health checks, and automated deployments.

🏗️ Architecture

Frontend → React app served with Nginx

Backend → Node.js + Express API

Database → PostgreSQL

Infrastructure → Docker Compose on EC2

CI/CD → GitHub Actions builds and deploys automatically on push

Monitoring/Logging → Morgan logs + Docker healthchecks

graph TD
    A[React Frontend] -->|API Calls| B[Node.js Backend]
    B -->|Queries| C[(PostgreSQL DB)]
    A -->|Served via Nginx| EC2[EC2 Instance]
    B -->|Docker Healthcheck + Logs| Monitor[Monitoring/Logging]

⚙️ Tech Stack

Frontend: React + Nginx

Backend: Node.js, Express

Database: PostgreSQL

CI/CD: GitHub Actions

Infrastructure: Docker, Docker Compose, AWS EC2

Monitoring: Docker healthchecks, Morgan logs

📂 Project Structure
multi-tier-devops-project/
│── backend/          # Node.js + Express API
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
│── frontend/         # React frontend
│   ├── src/App.js
│   └── Dockerfile
│
│── docker-compose.yml
│── .github/workflows/deploy.yml  # GitHub Actions CI/CD

🚀 Deployment Workflow

Push code to GitHub

GitHub Actions builds Docker images

Images deployed on AWS EC2 via Docker Compose

Application served at http://<Elastic-IP>:3000

🔍 Health Checks & Logging

Healthchecks in docker-compose.yml ensure backend & frontend only start when dependencies are ready.

Morgan logs all backend API requests.

Docker logging driver keeps logs rotated (max-size=10m, max-file=3).

📝 Setup Instructions
🔧 Local Development
git clone https://github.com/UtkarshRepos/multi-tier-devops-project.git
cd multi-tier-devops-project
docker compose up -d --build


Frontend → http://localhost:3000

Backend → http://localhost:5000

🌐 EC2 Deployment
# SSH into EC2
ssh -i your-key.pem ec2-user@<Elastic-IP>

# Run project
git clone https://github.com/UtkarshRepos/multi-tier-devops-project.git
cd multi-tier-devops-project
docker compose up -d --build

✅ Features Implemented

Multi-tier architecture (frontend, backend, database)

CI/CD with GitHub Actions

Dockerized deployment

Health checks for services

Centralized logging (json-file with rotation)

Monitoring via Prometheus client (future-ready)

📌 Next Steps / Future Improvements

Add Prometheus + Grafana dashboards

Add NGINX reverse proxy + SSL (HTTPS)

Terraform/CloudFormation for full infra automation
