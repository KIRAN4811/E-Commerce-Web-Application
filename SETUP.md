# E-Commerce Web Application Setup

## Prerequisites
- Node.js 14+
- npm or yarn
- Local MongoDB or MongoDB Atlas

## Backend Setup
1. Copy `.env.example` to `.env` and edit values
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start backend server:
   ```bash
   npm run dev
   ```
   - Runs at http://localhost:5000

## Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Copy `.env.example` to `.env` if using custom values
3. Start frontend app:
   ```bash
   npm run dev
   ```
   - Runs at http://localhost:5173

## Features
- Product catalog (frontend)
- User registration/login
- Shopping cart
- Checkout (creates order)
- Admin can manage products, view orders

## Architecture Overview
```
E-Commerce-Web-Application/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── index.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── index.html
├── README.md
└── SETUP.md
```

---

- For details, see code comments and `README.md`.