# Bike Shop Management System

A comprehensive **Bike Shop Management System** for managing product inventory, processing customer orders, and calculating total revenue. This project is built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose** for object data modeling.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)

## Project Overview

The **Bike Shop Management System** is designed to manage a bike shop’s product catalog and customer orders. Key functionalities include:

- **Product Management**: Admins can manage different bike products in the shop’s inventory.
- **Order Management**: Customers can place orders, which track the quantity and total cost of products.
- **Revenue Calculation**: The system calculates the total revenue by multiplying the quantity of bikes ordered by their price.

## Features

### Product Management:
- Add, update, and list bikes available for sale.
- Store details like price, description, quantity, and stock status.

### Order Management:
- Customers can create orders specifying the product and quantity.
- Automatically deducts quantity from inventory when an order is placed.

### Revenue Calculation:
- The system calculates the total revenue generated from all orders.
- Provides a revenue summary with the total amount earned.

### RESTful API:
- Exposes endpoints to interact with products, orders, and revenue calculations.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  
- **Database**:
  - MongoDB (NoSQL database)
  - Mongoose (Object Data Modeling for MongoDB)

- **Other**:
  - JavaScript (ES6+)
  - Postman for API testing

## Installation Instructions

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** installed. [Download Node.js](https://nodejs.org/)
- **MongoDB** installed locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based MongoDB.

### Steps to Install

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/bike-shop-management.git
    cd bike-shop-management
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```bash
    MONGO_URI=mongodb://<your-database-uri>
    ```

4. Start the server:
    ```bash
    npm start
    ```

   This will run the application on `http://localhost:3000`.

## Configuration

### MongoDB URI:
Modify the `MONGO_URI` in the `.env` file to point to your MongoDB instance. You can use MongoDB Atlas if you're hosting your database in the cloud:
```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/Bi-Cycle?retryWrites=true&w=majority


# API Endpoints - Bike Shop Management System

## Base URL: 
`http://localhost:3000/api`

## Endpoints

### 1. **Create Order**
- **Endpoint**: `POST /api/orders`
- **Description**: Creates a new order for a customer.
- **Request Body**:
    ```json
    {
      "email": "customer@example.com",
      "product": "<product_id>",
      "quantity": 2
    }
    ```
- **Response**:
    ```json
    {
      "message": "Order created successfully",
      "status": true,
      "data": {
        "_id": "<order_id>",
        "email": "customer@example.com",
        "product": "<product_id>",
        "quantity": 2,
        "totalPrice": 2599.98
      }
    }
    ```

---

### 2. **Calculate Total Revenue**
- **Endpoint**: `GET /api/orders/revenue`
- **Description**: Calculates the total revenue generated from all orders.
- **Response**:
    ```json
    {
      "message": "Revenue calculated successfully",
      "status": true,
      "data": {
        "totalRevenue": 2599.98
      }
    }
    ```

---

### 3. **Get All Products**
- **Endpoint**: `GET /api/products`
- **Description**: Retrieves a list of all products available in the shop.
- **Response**:
    ```json
    [
      {
        "_id": "<product_id>",
        "name": "Mountain Explorer",
        "brand": "TrailMasters",
        "price": 1299.99,
        "type": "Mountain",
        "description": "A rugged mountain bike perfect for off-road adventures.",
        "quantity": 15,
        "inStock": true
      }
    ]
    ```

---

### 4. **Get Product by ID**
- **Endpoint**: `GET /api/products/:id`
- **Description**: Retrieves detailed information about a specific product by its ID.
- **Response**:
    ```json
    {
      "_id": "<product_id>",
      "name": "Mountain Explorer",
      "brand": "TrailMasters",
      "price": 1299.99,
      "type": "Mountain",
      "description": "A rugged mountain bike perfect for off-road adventures.",
      "quantity": 15,
      "inStock": true
    }
    ```

---

### 5. **Update Product**
- **Endpoint**: `PUT /api/products/:id`
- **Description**: Updates an existing product's details.
- **Request Body**:
    ```json
    {
      "name": "Mountain Explorer Pro",
      "brand": "TrailMasters",
      "price": 1399.99,
      "quantity": 20,
      "inStock": true
    }
    ```
- **Response**:
    ```json
    {
      "message": "Product updated successfully",
      "status": true,
      "data": {
        "_id": "<product_id>",
        "name": "Mountain Explorer Pro",
        "brand": "TrailMasters",
        "price": 1399.99,
        "quantity": 20,
        "inStock": true
      }
    }
    ```

---

### 6. **Delete Product**
- **Endpoint**: `DELETE /api/products/:id`
- **Description**: Deletes a product from the shop's inventory.
- **Response**:
    ```json
    {
      "message": "Product deleted successfully",
      "status": true
    }
    ```

---

### 7. **Get All Orders**
- **Endpoint**: `GET /api/orders`
- **Description**: Retrieves a list of all orders placed by customers.
- **Response**:
    ```json
    [
      {
        "_id": "<order_id>",
        "email": "customer@example.com",
        "product": "<product_id>",
        "quantity": 2,
        "totalPrice": 2599.98
      }
    ]
    ```

---

### 8. **Get Order by ID**
- **Endpoint**: `GET /api/orders/:id`
- **Description**: Retrieves details of a specific order by its ID.
- **Response**:
    ```json
    {
      "_id": "<order_id>",
      "email": "customer@example.com",
      "product": "<product_id>",
      "quantity": 2,
      "totalPrice": 2599.98
    }
    ```

---

### 9. **Update Order**
- **Endpoint**: `PUT /api/orders/:id`
- **Description**: Updates an existing order, including product or quantity.
- **Request Body**:
    ```json
    {
      "email": "customer@example.com",
      "product": "<product_id>",
      "quantity": 3
    }
    ```
- **Response**:
    ```json
    {
      "message": "Order updated successfully",
      "status": true,
      "data": {
        "_id": "<order_id>",
        "email": "customer@example.com",
        "product": "<product_id>",
        "quantity": 3,
        "totalPrice": 3899.97
      }
    }
    ```

---

### 10. **Delete Order**
- **Endpoint**: `DELETE /api/orders/:id`
- **Description**: Deletes an order from the system.
- **Response**:
    ```json
    {
      "message": "Order deleted successfully",
      "status": true
    }
    ```

---

## Notes:
- Replace `<product_id>`, `<order_id>` with actual product/order IDs in the request and response data.
- Make sure MongoDB is running locally or use MongoDB Atlas for cloud-based hosting.
- Adjust the values for product prices, quantities, and orders based on actual data in the database.

---

This file consolidates all your API endpoints and can be used for documentation or reference.
