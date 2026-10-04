# ATM Management System

A simple full-stack ATM Management System built as a personal learning project to practise backend development, frontend integration, authentication, and database operations using the MERN stack.

> **Note:** This is an educational project for local practice. It is not a real banking application and is not intended for production use.

## About the Project

The ATM Management System simulates basic ATM operations through a React frontend connected to a Node.js and Express backend. It uses MongoDB to store user information and account data, with authentication to protect user-specific operations.

The main goal of this project was to understand how a frontend communicates with a backend, how REST APIs are developed, and how authentication and database operations fit together in a full-stack application.

## Features

- User login and authentication
- Protected user profile access
- Check account balance
- Deposit money
- Withdraw money
- Change PIN
- Logout
- React dashboard with separate components for ATM operations

## Tech Stack

**Frontend**
- React
- Vite
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator

## Project Structure

```text
ATM-Management-System/
├── Backend/
│   ├── src/
│   │   ├── Controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── Routes/
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB, either locally or through MongoDB Atlas
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ATM-Management-System
```

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder and add the environment variables required by the backend code, such as the MongoDB connection string and JWT secret. Use the exact variable names expected by the application. Do not share or commit real credentials.

Start the backend using the script defined in `Backend/package.json`.

For example, if the project defines a `dev` script:

```bash
npm run dev
```

Or, if it uses a `start` script:

```bash
npm start
```

### 3. Set Up the Frontend

Open a separate terminal from the project root:

```bash
cd Frontend
npm install
```

Start the frontend using the script defined in `Frontend/package.json`. For a standard Vite setup, this is commonly:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Learning Outcomes

Through this project, I practised:

- Structuring a full-stack application with separate frontend and backend folders
- Building REST APIs using Express.js
- Connecting a Node.js backend to MongoDB using Mongoose
- Implementing JWT-based authentication and protected routes
- Hashing and verifying sensitive values with bcryptjs
- Connecting React components to backend APIs using Axios
- Managing React state and passing data through props
- Implementing basic account operations and handling API responses

## Project Scope

This project was built for learning and practice. It focuses on understanding the fundamentals of full-stack development and frontend-backend integration. It does not connect to any real banking network, payment gateway, or ATM hardware.

## Future Improvements

Possible improvements for further practice include:

- Stronger backend validation and error handling
- More comprehensive automated testing
- Improved security and session management
- Transaction history and additional account features
- Deployment after appropriate security and reliability improvements

## Author

A personal full-stack development practice project built while learning the MERN stack.
