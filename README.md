# Article Tracker

Article Tracker is a web application that allows you to track articles you have read. You can add articles by entering their URLs, and the application will validate the URLs before saving them. You can also delete articles from the list.

![image](https://github.com/user-attachments/assets/ba220390-6364-42cb-a44e-be95ed0aa230)


## Features

- Add articles by entering their URLs.
- Automatically add `https://` if the URL does not include a protocol.
- Validate URLs by making an HTTP request to check if they are accessible.
- Fetch and display the favicon of the entered URL.
- Display the list of articles with the visit date.
- Convert listed URLs to clickable links.
- Delete articles from the list.
- Display the total count of articles read.
- Display the count of articles read on a selected date.
- Scrollable list of articles when there are multiple entries.
- Navigate through dates using back and forward buttons.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/article-tracker.git
    cd article-tracker
    ```

2. Navigate to the backend directory and install dependencies:

    ```sh
    cd backend
    npm install
    ```

3. Navigate to the frontend directory and install dependencies:

    ```sh
    cd ../frontend
    npm install
    ```

4. Create a `.env` file in the `frontend` directory with the following content:

    ```env
    REACT_APP_API_URL=http://localhost:5005
    ```

## Running the Application

1. Start the backend server:

    ```sh
    cd backend
    npm run dev
    ```

2. Start the frontend development server:

    ```sh
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Docker

You can also run the application using Docker and Docker Compose.

1. Build and start the containers:

    ```sh
    docker-compose up --build
    ```

2. Open your browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

- `POST /api/articles`: Add a new article.
- `GET /api/articles`: Get the list of articles.
- `GET /api/articles/count`: Get the total count of articles.
- `DELETE /api/articles/:id`: Delete an article by ID.

## Frontend Components

- `ArticleInput`: Component for entering and saving article URLs.
- `ArticleCounter`: Component for displaying the total count of articles read.
- `ArticleList`: Component for displaying the list of articles with visit dates, favicons, clickable links, and delete buttons.

## Backend

- `articleModel.js`: Mongoose model for articles.
- `articleController.js`: Controller for handling article-related operations.
- `articleRoutes.js`: Express routes for article-related endpoints.

## License

This project is licensed under the MIT License.


## Updating the Application (Docker)

To update the application when using Docker, follow these steps:

1. Pull the latest changes from the repository:

    ```sh
    git pull origin main
    ```

2. Rebuild the Docker images:

    ```sh
    docker-compose build
    ```

3. Restart the Docker containers:

    ```sh
    docker-compose up -d
    ```