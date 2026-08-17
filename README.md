# 🍔 FoodDash — Online Food Ordering App

A full-stack food ordering web application built with React, Node.js, and MongoDB — featuring a complete user journey from browsing to order tracking.

## 🌟 Overview

FoodDash is a production-ready food ordering platform where users can browse 100+ dishes across multiple cuisines, manage their cart, place orders with a custom delivery address, and track their order status in real time — all within a clean, modern UI inspired by Swiggy and Zomato.

## ✨ Features

### 🛍️ Browsing & Menu
- 100+ food items across 6 categories — Pizza, Burger, Indian, Thai, Healthy, Bowls
- Real-time search by dish name or cuisine
- Food cards with star ratings, delivery time estimates, and deal badges (Best Seller, 20% OFF)

### 🛒 Cart & Ordering
- Add/remove items with quantity controls
- Persistent cart with item count in navbar
- Custom delivery address input at checkout
- Auto-fill delivery address from saved location

### 📦 Order Management
- Full order history on My Orders page
- Live order status timeline: Confirmed → Preparing → Out for Delivery → Delivered

### 🔐 Authentication
- User signup and login with JWT
- Forgot password flow
- Protected routes for authenticated users

## 🛠️ Tech Stack

### Frontend

```
| Technology | Purpose |

| React 18 | UI framework |
| Vite | Build tool and dev server |
| React Router v6 | Client-side routing |
| Axios | HTTP requests to backend API |
| Lucide React | Icon library |
| CSS3 | Custom styling and animations |
```

### Backend

```
| Technology | Purpose |

| Node.js | Runtime environment |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modelling |
| JSON Web Token (JWT) | User authentication |
| bcrypt | Password hashing |
| dotenv | Environment variable management |
| cors | Cross-origin resource sharing |
```

## 📁 Project Structure

```
Online-Food-Ordering-System/
│
├── backend/
│   ├── models/
│   │   ├── FoodItem.js
│   │   ├── Order.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── food.js
│   │   └── orders.js
│   ├── .gitignore
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── FoodCard.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── OrderSuccess.jsx
│   │   │   ├── Payment.jsx
│   │   │   └── Register.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── .gitignore
```

## ⚙️ Getting Started

### Prerequisites
- Node.js v18 or higher
- MongoDB (local) or MongoDB Atlas account
- npm or yarn

### 1. Setup Backend

```bash
cd backend
npm install
```

Seed the database:

```bash
node seed.js
```

Start the backend server:

```bash
node server.js
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

## 👩‍💻 Developer

**A. Akshaya Esther**
   🎓 B.Tech Information Technology — Anna University (BIT Campus, Trichy) — 2026
