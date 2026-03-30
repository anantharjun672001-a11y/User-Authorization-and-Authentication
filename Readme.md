# User Authentication API

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

## Features
- User Registration (Password hashed using bcrypt)
- User Login (JWT Token generation)
- Protected Route (Bearer Token Authentication)

## API Endpoints

### Register
POST /api/users/register

### Login
POST /api/users/login

### Get Profile
GET /api/users/profile

## How to Run

1. Install dependencies:
npm install

2. Create .env file:
PORT=3000
MONGODB_URI=your_mongo_url
JWT_SECRET=your_secret_key

3. Start server:
npm run dev

## Authentication
Use Bearer Token in headers:
Authorization: Bearer YOUR_TOKEN


## API Documentation

https://documenter.getpostman.com/view/43712221/2sBXinGVqS


## Deployment
--render

https://user-authorization-and-authentication.onrender.com


## Author

Ananthraj

