# MERN Todo List App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The MERN Todo List App is a full-stack application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, read, update, and delete tasks, with data persisted in a MongoDB database. The backend is built with Express and Node.js, while the frontend is powered by React.

## Features

- **Add Tasks:** Create new tasks and store them in the database.
- **Edit Tasks:** Update existing tasks directly in the list.
- **Delete Tasks:** Remove tasks from the list and database.
- **Mark as Complete:** Mark tasks as complete to keep track of progress.
- **Filter Tasks:** Filter tasks by their completion status (All, Active, Completed).
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Architecture

- **Frontend:** Built with React, providing a responsive and dynamic user interface.
- **Backend:** Developed with Node.js and Express, handling API requests and responses.
- **Database:** MongoDB is used to store tasks, providing a scalable NoSQL solution.
- **State Management:** React hooks and state are used to manage the application's state.

## Installation

To install and run the Todo List App locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (running locally or using a service like MongoDB Atlas)
- Git

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/dipak-kumawat/TodoList.git
    ```

2. Navigate to the project directory:

    ```bash
    cd TodoList
    ```

3. Install the server dependencies:

    ```bash
    cd server
    npm install
    ```

4. Install the client dependencies:

    ```bash
    cd ../client
    npm install
    ```

5. Set up environment variables:

    Create a `.env` file in the `backend` directory and add your MongoDB connection string and other necessary environment variables:

    ```env
    MONGO_URI="mongodb+srv://dipaksk11:dipak@cluster0.wee8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    PORT=3001
    ```

6. Start the MongoDB server:

    If using a local MongoDB instance, start it with:

    ```bash
    mongod
    ```

7. Start the backend server:

    ```bash
    cd server
    nodeman index.js
    ```

    The backend server will run at [http://localhost:3001](http://localhost:3001).

8. Start the frontend server:

    ```bash
    cd ../client
    npm run dev
    ```

    The frontend should now be running at [http://localhost:5173](http://localhost:5173).

## Usage

Once the app is running:

- **Add a Task:** Use the input field to create a new task. Press "Enter" or click the "Add" button to save the task.
- **Edit a Task:** Click on a task to edit its content directly.
- **Delete a Task:** Click the "Delete" button next to a task to remove it from the list.
- **Mark as Complete:** Click the checkbox next to a task to mark it as complete.
- **Filter Tasks:** Use the filter options (All, Active, Completed) to view specific tasks.

## API Endpoints

The app's backend provides the following API endpoints:

- **GET** `/api/tasks`: Retrieve all tasks.
- **POST** `/api/tasks`: Create a new task.
- **PUT** `/api/tasks/:id`: Update an existing task.
- **DELETE** `/api/tasks/:id`: Delete a task.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes tests where necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions:

- **Email:** dipaksk11@gmail.com
- **GitHub:** [yourusername](https://github.com/dipak-kumawat)
