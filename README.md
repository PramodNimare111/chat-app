# Chat App

A full-stack real-time chat application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.IO** for live bidirectional messaging.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

-  User authentication (sign up / log in)
-  Real-time messaging powered by Socket.IO
-  One-on-one and group chat support
-  Online / offline user status indicators
-  Persistent chat history stored in MongoDB
-  Responsive UI for desktop and mobile

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React.js, Tailwind CSS / CSS        |
| Backend   | Node.js, Express.js                 |
| Database  | MongoDB (Mongoose ODM)              |
| Real-time | Socket.IO                           |
| Auth      | JWT (JSON Web Tokens)               |

---

## Project Structure

```
chat-app/
├── backend/          # Express server, API routes, Socket.IO logic
│   ├── models/       # Mongoose schemas (User, Message, etc.)
│   ├── routes/       # REST API route handlers
│   ├── controllers/  # Business logic
│   └── index.js      # Server entry point
├── frontend/         # React client application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── public/
├── package.json      # Root scripts for build & start
└── .gitignore
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/) v8+
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PramodNimare111/chat-app.git
   cd chat-app
   ```

2. **Install all dependencies** (frontend + backend together)

   ```bash
   npm run build
   ```

   > This runs `npm install` in both the `frontend/` and `backend/` directories and builds the React app.

   Or install them separately:

   ```bash
   # Backend
   cd backend && npm install

   # Frontend
   cd ../frontend && npm install
   ```

### Environment Variables

Create a `.env` file inside the `backend/` directory and populate it with your configuration:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

| Variable    | Description                              |
|-------------|------------------------------------------|
| `PORT`      | Port the Express server listens on       |
| `MONGO_URI` | MongoDB connection string                |
| `JWT_SECRET`| Secret key used for signing JWT tokens   |
| `NODE_ENV`  | Environment (`development`/`production`) |

### Running the App

**Development mode** (run frontend and backend separately):

```bash
# Terminal 1 — Start the backend server
cd backend
npm run dev      # uses nodemon for hot-reload

# Terminal 2 — Start the React dev server
cd frontend
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

**Production mode** (serves the built React app from the backend):

```bash
# From the root directory
npm start
```

---

## Available Scripts

All scripts below are run from the **root** directory:

| Script        | Description                                              |
|---------------|----------------------------------------------------------|
| `npm run build` | Installs dependencies for both frontend & backend, then builds the React app |
| `npm start`     | Starts the backend server (which serves the built frontend) |

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code follows the existing style and all features are tested before submitting.

---

## License

This project is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for details.

---

> Built with by [PramodNimare111](https://github.com/PramodNimare111)