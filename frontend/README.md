# Article Tracker Frontend

This project is a simple article tracking application built with React for the frontend and Node.js with MongoDB for the backend. The application allows users to keep track of the number of articles they have read.

## Features

- Input field to enter the title of an article.
- Save button to store the article title.
- Counter displaying the total number of articles read.

## Getting Started

### Prerequisites

- Node.js
- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd article-tracker
   ```

2. Navigate to the frontend directory:
   ```
   cd frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application using Docker, you can use the provided `docker-compose.yml` file. This will set up both the frontend and backend services along with MongoDB.

1. From the root of the project, run:
   ```
   docker-compose up
   ```

2. Access the application in your browser at `http://localhost:3000`.

### Folder Structure

- `src/components`: Contains React components for the application.
- `src/App.js`: Main application component.
- `src/index.js`: Entry point for the React application.

### API Endpoints

The frontend communicates with the backend API to save and retrieve article data. The backend is set up to handle requests related to articles.

### License

This project is licensed under the MIT License.