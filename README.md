# Event Talks App

This is a simple web application that displays the schedule for a one-day event with a single track of talks.

## Features

*   Displays a list of talks with their time, title, speakers, description, and categories.
*   Search functionality to filter talks by category.
*   A simple and clean user interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installing

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/event-talks-app.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd event-talks-app
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the application

To start the server, run the following command:

```bash
npm start
```

The application will be available at `http://localhost:9090`.

## Usage

Open your web browser and navigate to `http://localhost:9090`. You will see the schedule of talks. You can use the search bar to filter the talks by category.

## API Endpoints

*   `GET /api/talks`: Returns a JSON array of all the talks.

## Technologies Used

*   [Node.js](https://nodejs.org/)
*   [Express](https://expressjs.com/)
*   HTML
*   CSS
*   JavaScript
