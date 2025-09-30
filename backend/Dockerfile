FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose both backend port and Prometheus metrics (same port, metrics on /metrics)
EXPOSE 5000

CMD ["node", "index.js"]
