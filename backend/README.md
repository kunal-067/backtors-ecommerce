# Dacktor's API Documentation

## Introduction
Dacktor's API provides endpoints for various functionalities such as user management, product management, order management, and more.

## Authentication
To access the API endpoints, developers need to authenticate their requests using tokens or keys provided by Dacktor's API at login time send token in header with name - 'Authorization' or store it in cookie as token(at browser login api will automatically do this).

## Base URL
The base URL for accessing the API endpoints is `[{server_uri}]/api`.

## Endpoints Overview
- **User Management**:
  - `/user-info`: Get user information
  - `/signup`: Register a new user
  - `/login`: Log in to the system
  - `/check-otp/:id`: Check OTP for user verification
  - `/update-password`: Update user password
  - `/logout`: Log out from the system
  - `/all-users`: Get information about all users (Admin action)
  - `/user`: Delete a user (Admin action)
  
- **Product Management**:
  - `/random-products`: Get random products
  - `/searched-products`: Search products
  - `/product-info/:id`: Get product information
  - `/all-products`: Get information about all products
  - `/add-new-product`: Add a new product  (Admin action)
  - `/edit-product/:id`: Update product information  (Admin action)
  - `/remove-product/:id`: Delete a product  (Admin action)

- **Order Management**:
  - `/orders`: Get user's orders
  - `/orders`: Buy a product
  - `/all-orders`: Get information about all orders  (Admin action)
  - `/update-order/:id`: Update order status  (Admin action)

- **Review Management**:
  - `/reviews`: Add a review
  - `/reviews/:id`: Get product reviews
  - `/reviews`: Get all reviews  (Admin action)
  - `/reviews/:id`: Delete  (Admin action)


## Detailed Introduction of Endpoints

## User Section
<details>
  <summary>Get User Info</summary>

  ### Get User Info

  Retrieve information about the authenticated user.

  - **URL:** `/user-info`
  - **Method:** `GET`
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "User info retrieved successfully!",
        "user": {
          "id": "user_id",
          "name": "User Name",
          "email": "user@example.com"
        }
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Please log in."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting user info.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Sign Up</summary>

  ### Sign Up

  Register a new user.

  - **URL:** `/signup`
  - **Method:** `POST`
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "name": "User Name",
        "email": "user@example.com",
        "password": "password"
      }
      ```
  - **Response:**
    - **201 Created**
      ```json
      {
        "message": "User registered successfully!",
        "user": {
          "id": "new_user_id",
          "name": "User Name",
          "email": "user@example.com"
        }
      }
      ```
    - **400 Bad Request**
      ```json
      {
        "message": "Invalid input data."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while signing up.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Login</summary>

  ### Login

  Authenticate a user and return a token.

  - **URL:** `/login`
  - **Method:** `POST`
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "email": "user@example.com",
        "password": "password"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Login successful!",
        "token": "jwt_token"
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Invalid email or password."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while logging in.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Check OTP</summary>

  ### Check OTP

  Verify the OTP for the user.

  - **URL:** `/check-otp/:id`
  - **Method:** `POST`
  - **Request Parameters:**
    - `id`: The ID of the user.
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "otp": "123456"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "OTP verified successfully!"
      }
      ```
    - **400 Bad Request**
      ```json
      {
        "message": "Invalid OTP."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while verifying OTP.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Update Password</summary>

  ### Update Password

  Update the user's password.

  - **URL:** `/update-password`
  - **Method:** `PATCH`
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "currentPassword": "current_password",
        "newPassword": "new_password"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Password updated successfully!"
      }
      ```
    - **400 Bad Request**
      ```json
      {
        "message": "Invalid current password."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while updating password.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Logout</summary>

  ### Logout

  Logout the user.

  - **URL:** `/logout`
  - **Method:** `POST`
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Logout successful!"
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while logging out.",
        "error": "Error message"
      }
      ```
</details>

## Admin Actions
<details>
  <summary>Get All Users</summary>

  ### Get All Users

  Retrieve a list of all users (admin only).

  - **URL:** `/all-users`
  - **Method:** `GET`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "All users retrieved successfully!",
        "users": [
          {
            "id": "user1",
            "name": "User 1",
            "email": "user1@example.com"
          },
          {
            "id": "user2",
            "name": "User 2",
            "email": "user2@example.com"
          }
        ]
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting all users.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Delete User</summary>

  ### Delete User

  Delete a user account (admin only).

  - **URL:** `/user`
  - **Method:** `DELETE`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "userId": "user_id_to_delete"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "User deleted successfully!"
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Invalid user ID."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while deleting the user.",
        "error": "Error message"
      }
      ```
</details>

## Products Section
<details>
  <summary>Get Random Products</summary>

  ### Get Random Products

  Retrieve a list of random products.

  - **URL:** `/random-products`
  - **Method:** `GET`
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Random products retrieved successfully!",
        "products": [
          {
            "id": "product1",
            "name": "Product 1",
            "price": 20.99,
            "image": "image_url"
          },
          {
            "id": "product2",
            "name": "Product 2",
            "price": 35.99,
            "image": "image_url"
          }
        ]
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting random products.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Search Products</summary>

  ### Search Products

  Search for products based on a query.

  - **URL:** `/searched-products`
  - **Method:** `GET`
  - **Query Parameters:**
    - `query`: The search query string.
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Products retrieved successfully!",
        "products": [
          {
            "id": "product1",
            "name": "Product 1",
            "price": 20.99,
            "image": "image_url"
          },
          {
            "id": "product2",
            "name": "Product 2",
            "price": 35.99,
            "image": "image_url"
          }
        ]
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while searching for products.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Get Product Info</summary>

  ### Get Product Info

  Retrieve detailed information about a specific product.

  - **URL:** `/product-info/:id`
  - **Method:** `GET`
  - **Request Parameters:**
    - `id`: The ID of the product.
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Product info retrieved successfully!",
        "product": {
          "id": "product1",
          "name": "Product 1",
          "description": "Detailed description",
          "price": 20.99,
          "image": "image_url"
        }
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "Product not found! Invalid product ID."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting product info.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Get All Products (Admin)</summary>

  ### Get All Products (Admin)

  Retrieve all products (admin only).

  - **URL:** `/all-products`
  - **Method:** `GET`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "All products retrieved successfully!",
        "products": [
          {
            "id": "product1",
            "name": "Product 1",
            "price": 20.99,
            "image": "image_url"
          },
          {
            "id": "product2",
            "name": "Product 2",
            "price": 35.99,
            "image": "image_url"
          }
        ]
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting all products.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Add New Product (Admin)</summary>

  ### Add New Product (Admin)

  Add a new product to the store (admin only).

  - **URL:** `/add-new-product`
  - **Method:** `POST`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "name": "New Product",
        "description": "Product description",
        "price": 29.99,
        "image": "image_url"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Product added successfully!",
        "product": {
          "id": "new_product_id",
          "name": "New Product",
          "price": 29.99,
          "image": "image_url"
        }
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while adding the product.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Edit Product (Admin)</summary>

  ### Edit Product (Admin)

  Update the information of an existing product (admin only).

  - **URL:** `/edit-product/:id`
  - **Method:** `PUT`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Request Parameters:**
    - `id`: The ID of the product to update.
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "name": "Updated Product Name",
        "description": "Updated description",
        "price": 39.99,
        "image": "new_image_url"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Product updated successfully!",
        "product": {
          "id": "updated_product_id",
          "name": "Updated Product Name",
          "price": 39.99,
          "image": "new_image_url"
        }
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "Product not found! Invalid product ID."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while updating the product.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Remove Product (Admin)</summary>

  ### Remove Product (Admin)

  Delete an existing product from the store (admin only).

  - **URL:** `/remove-product/:id`
  - **Method:** `DELETE`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Request Parameters:**
    - `id`: The ID of the product to delete.
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Product removed successfully!"
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "Product not found! Invalid product ID."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while removing the product.",
        "error": "Error message"
      }
      ```
</details>

## Orders Section
<details>
  <summary>Get Orders</summary>

  ### Get Orders

  Retrieve the list of orders for the authenticated user.

  - **URL:** `/orders`
  - **Method:** `GET`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the user's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Orders retrieved successfully!",
        "orders": [
          {
            "id": "order1",
            "product": "product1",
            "quantity": 2,
            "status": "Pending"
          },
          {
            "id": "order2",
            "product": "product2",
            "quantity": 1,
            "status": "Shipped"
          }
        ]
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Invalid user-id."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting your orders.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Buy Product</summary>

  ### Buy Product

  Create a new order for the authenticated user.

  - **URL:** `/orders`
  - **Method:** `POST`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the user's token)
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "product": "product1",
        "quantity": 2,
        "shippingAddress": "123 Main St, City, Country"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Order placed successfully!",
        "order": {
          "id": "order1",
          "product": "product1",
          "quantity": 2,
          "status": "Pending"
        }
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Try again."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong please try again!"
      }
      ```
</details>

<details>
  <summary>Get All Orders (Admin)</summary>

  ### Get All Orders (Admin)

  Retrieve all orders (admin only).

  - **URL:** `/all-orders`
  - **Method:** `GET`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the admin's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "All orders retrieved successfully!",
        "orders": [
          {
            "id": "order1",
            "user": "user1",
            "product": "product1",
            "quantity": 2,
            "status": "Pending"
          },
          {
            "id": "order2",
            "user": "user2",
            "product": "product2",
            "quantity": 1,
            "status": "Shipped"
          }
        ]
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting all orders.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Update Order (Admin)</summary>

  ### Update Order (Admin)

  Update the status of an existing order (admin only).

  - **URL:** `/update-order/:id`
  - **Method:** `PUT`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the admin's token)
  - **Request Parameters:**
    - `id`: The ID of the order to update.
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "status": "Shipped"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Order updated successfully!",
        "order": {
          "id": "order1",
          "status": "Shipped"
        }
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "Order not found! Invalid order-id."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Internal server error! Try later.",
        "error": "Error message"
      }
      ```
</details>

## Shopping Cart Section
<details>
  <summary>Get Cart</summary>

  ### Get Cart

  Retrieve the current state of the shopping cart.

  - **URL:** `/cart`
  - **Method:** `GET`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the user's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Successful!",
        "cart": [
          {
            "_id": "item1",
            "product": "product1",
            "quantity": 2,
            "size": "M",
            "color": "Red"
          },
          {
            "_id": "item2",
            "product": "product2",
            "quantity": 1,
            "size": null,
            "color": null
          }
        ],
        "length": 2
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Invalid user-id"
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting your cart.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Add to Cart</summary>

  ### Add to Cart

  Add a new item to the cart.

  - **URL:** `/cart-item`
  - **Method:** `POST`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the user's token)
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "product": "product1",
        "quantity": 2,
        "size": "M",
        "color": "Red"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Product added to cart successfully!"
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Try again."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong please try again!"
      }
      ```
</details>

<details>
  <summary>Update Cart Item</summary>

  ### Update Cart Item

  Update the quantity, size, or color of an existing item in the cart.

  - **URL:** `/cart-item/:id`
  - **Method:** `PATCH`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the user's token)
  - **Request Parameters:**
    - `id`: The ID of the cart item to update.
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "updatedData": {
          "quantity": 3,
          "size": "L",
          "color": "Blue"
        }
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Cart updated successfully!",
        "item": {
          "_id": "item1",
          "product": "product1",
          "quantity": 3,
          "size": "L",
          "color": "Blue"
        }
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Invalid token."
      }
      ```
      ```json
      {
        "message": "Invalid itemId! It doesn't exist in your cart"
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Internal server error! Try later."
      }
      ```
</details>

<details>
  <summary>Delete from Cart</summary>

  ### Delete from Cart

  Remove an item from the cart.

  - **URL:** `/cart-item`
  - **Method:** `DELETE`
  - **Request Headers:**
    - `Authorization`: Bearer token (to include the user's token)
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "itemId": "item1"
      }
      ```
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Item deleted from cart successfully!"
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "User not found! Try again."
      }
      ```
      ```json
      {
        "message": "Item not found! Try again."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong please try again!"
      }
      ```

</details>

## Reviews Section
<details>
  <summary>Add Review</summary>

  ### Add Review

  Add a review for a product.

  - **URL:** `/reviews`
  - **Method:** `POST`
  - **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      {
        "productId": "product_id",
        "userId": "user_id",
        "rating": 4,
        "comment": "This product is amazing!"
      }
      ```
  - **Response:**
    - **201 Created**
      ```json
      {
        "message": "Review added successfully!",
        "review": {
          "id": "review_id",
          "productId": "product_id",
          "userId": "user_id",
          "rating": 4,
          "comment": "This product is amazing!"
        }
      }
      ```
    - **400 Bad Request**
      ```json
      {
        "message": "Invalid input data."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while adding review.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Get Product Reviews</summary>

  ### Get Product Reviews

  Retrieve all reviews for a specific product.

  - **URL:** `/reviews/:id`
  - **Method:** `GET`
  - **Request Parameters:**
    - `id`: The ID of the product.
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Product reviews retrieved successfully!",
        "reviews": [
          {
            "id": "review_id",
            "productId": "product_id",
            "userId": "user_id",
            "rating": 4,
            "comment": "This product is amazing!"
          },
          {
            "id": "review_id",
            "productId": "product_id",
            "userId": "user_id",
            "rating": 5,
            "comment": "Excellent product!"
          }
        ]
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "No reviews found for the product."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting product reviews.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Get All Reviews</summary>

  ### Get All Reviews (Admin)

  Retrieve all reviews (admin only).

  - **URL:** `/reviews`
  - **Method:** `GET`
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "All reviews retrieved successfully!",
        "reviews": [
          {
            "id": "review_id",
            "productId": "product_id",
            "userId": "user_id",
            "rating": 4,
            "comment": "This product is amazing!"
          },
          {
            "id": "review_id",
            "productId": "product_id",
            "userId": "user_id",
            "rating": 5,
            "comment": "Excellent product!"
          }
        ]
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while getting all reviews.",
        "error": "Error message"
      }
      ```
</details>

<details>
  <summary>Delete Review</summary>

  ### Delete Review (Admin)

  Delete a review (admin only).

  - **URL:** `/reviews/:id`
  - **Method:** `DELETE`
  - **Request Parameters:**
    - `id`: The ID of the review.
  - **Request Headers:**
    - `Authorization`: Bearer token (admin's token)
  - **Response:**
    - **200 OK**
      ```json
      {
        "message": "Review deleted successfully!"
      }
      ```
    - **401 Unauthorized**
      ```json
      {
        "message": "Unauthorized access! Admin only."
      }
      ```
    - **404 Not Found**
      ```json
      {
        "message": "Review not found! Invalid review ID."
      }
      ```
    - **500 Internal Server Error**
      ```json
      {
        "message": "Something went wrong while deleting the review.",
        "error": "Error message"
      }
      ```
</details>

## Error Handling

Each endpoint may return the following error responses:

- **400 Bad Request:** Returned when the request data is invalid or malformed.
- **404 Not Found:** Returned when the specified resource is not found.
- **500 Internal Server Error:** Returned when there is an internal server error.

Please ensure to handle these responses appropriately in your client application.
