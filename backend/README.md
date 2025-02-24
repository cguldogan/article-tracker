# Article Tracker Backend

This is the backend service for the Article Tracker application. It is built using Node.js and Express, and it connects to a MongoDB database to store and retrieve the articles you have read.

## Features

- Save the titles of articles you have read.
- Retrieve the count of articles read.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd article-tracker/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application locally, use the following command:
```
npm start
```

### Docker

To build and run the backend service using Docker, execute the following commands:

1. Build the Docker image:
   ```
   docker build -t article-tracker-backend .
   ```

2. Run the Docker container:
   ```
   docker run -p 5005:5005 article-tracker-backend
   ```

### API Endpoints

- `POST /articles`: Save a new article.
- `GET /articles/count`: Get the count of articles read.

### License

This project is licensed under the MIT License. See the LICENSE file for details.