<div align="center">

# BookLoft

**A full-stack e-commerce web application for book lovers**

[![Netlify](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://your-netlify-link.netlify.app)
[![React](https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)

</div>

---

## Overview

BookLoft is a responsive, full-stack e-commerce platform where users can browse books, save favorites, leave reviews, and manage their accounts — all through a clean, intuitive interface. The frontend is built with React.js and Redux, connected to a Node.js/Express backend with MongoDB for data persistence.

---

## Features

- **Product Browsing** — Explore a catalog of books with search and filter support
- **Wishlist / Favorites** — Save books for later with one click
- **Reviews & Ratings** — Leave and read reviews on any book
- **User Authentication** — Secure signup, login, and session management
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Global State Management** — Powered by Redux for seamless data flow across components

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Redux, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **API** | RESTful APIs (3+ endpoints) |
| **Deployment** | Netlify |

---

## Project Structure

```
BookLoft/
├── conn/           # Database connection
├── models/         # MongoDB data models
├── routes/         # Express API routes
├── app.js          # Server entry point
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/Saba2qamar/BookLoft.git
cd BookLoft

# Install dependencies
npm install

# Set up environment variables
# Create a .env file and add:
# MONGO_URI=your_mongodb_connection_string
# PORT=5000

# Start the server
node app.js
```

The backend runs on `http://localhost:5000` by default.

> For the frontend, navigate to the client directory and run `npm install && npm start`.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive token |
| `GET` | `/api/books` | Fetch all books |
| `POST` | `/api/books/:id/review` | Add a review |
| `POST` | `/api/favorites` | Add/remove from favorites |

---

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

---

## Deployment

The application frontend is deployed on **Netlify**. To deploy your own version:

```bash
npm run build
# Upload the build/ folder to Netlify, or connect your GitHub repo directly
```

---

## Author

**Saba Qamar**
B.Tech Computer Science · Banasthali Vidyapith

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/saba-qamar)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Saba2qamar)

---

<div align="center">
<sub>If you found this project helpful, consider giving it a ⭐</sub>
</div>
