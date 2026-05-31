# E-Commerce Web Application

A basic full-stack online store with product management, user authentication, cart, and order tracking.

## Features

- Product catalog (Admin can add/edit/delete products)
- Shopping cart and checkout functionality
- User registration/login with JWT
- Role-based access (Admin/User)
- Order management & tracking
- RESTful backend API
- MongoDB database integration

## Tech Stack

- Frontend: React.js (Vite, Context API)
- Backend: Node.js (Express.js, Mongoose)
- Database: MongoDB
- Auth: JWT + bcrypt
- Styling: Tailwind CSS

## Getting Started

### 1. Clone the repository

```bash
# Backend setup
cd E-Commerce-Web-Application/backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev

# Frontend setup
cd ../frontend
npm install
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## See SETUP.md for complete details.
