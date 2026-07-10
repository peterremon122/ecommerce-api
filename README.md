# E-Commerce API

A simple REST API built with Node.js, Express, and MongoDB for managing products and a shopping cart.

## Features

* Product CRUD operations
* Shopping cart APIs
* MongoDB database
* Error handling middleware
* ObjectId validation

## Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose

## Installation

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

## Environment Variables

Create a `.env` file and add:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
```

## API Endpoints

### Products

* GET `/api/products`
* GET `/api/products/:id`
* POST `/api/products`
* PUT `/api/products/:id`
* DELETE `/api/products/:id`

### Cart

* GET `/api/cart`
* POST `/api/cart`
* DELETE `/api/cart/:id`
