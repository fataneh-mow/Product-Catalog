# Melova Product Store App

A modern product store web application built with React, demonstrating advanced state management and data fetching techniques using **Context API + useReducer**, **Redux Toolkit**, and **React Query**.

## Project Overview

This project is a fully functional product store where users can:

- Browse products from an API
- Search and filter products
- View product details
- Add products to cart
- Manage cart items (increase, decrease, remove, clear)
- Switch themes (light/dark)
- Change language (English / Persian)
- Use pagination for product browsing


### State Management Using Redux toolkit and apiContext

- This project demonstrates different types of state management:

### 1. Context API + useReducer (UI State)
Used for global UI settings:

- Theme (Light / Dark)
- View mode (Grid / List)
- Search input
- Pagination state
- Category filtering

### 2. Redux Toolkit (Cart Management)
Used for shopping cart logic:

- Add to cart
- Remove item
- Increase quantity
- Decrease quantity
- Clear cart
- Total items counter

### 3. React Query (API Data Fetching)
Used for fetching products efficiently:

- Product list fetching
- Product details fetching
- Pagination support
- Caching and refetching
- Loading & error states

## Pages

### 1.Home Page
- Simple landing page
- Hero image
- Button navigation to products

### Products Page
- Product grid/list view
- Search functionality
- Category filtering
- Pagination (6 items per page)
- Add to cart buttons for every product

### Product Details Page
- Full product information
- Image preview
- Price, category, brand
- Add to cart functionality
- Back button navigation

### Cart Page
- List of cart items
- Quantity controls (+ / -)
- Remove item button
- Clear cart button
- Order summary (subtotal, shipping, total)
- Total cart counter shown in header

### Settings (UI Controls)
- Theme toggle (light/dark)
- Language switcher (EN / FA)

## Key Features

Product search  
Category filtering  
Pagination (API-based)  
Cart system (Redux Toolkit)  
Product details page  
Responsive UI  
RTL support (Persian language)  
Toast notifications  
Theme persistence  
Clean reusable components  

## Tech Stack
- React
- React Router dom
- Redux Toolkit
- React Query (@tanstack/react-query)
- Context API + useReducer
- Axios (for data fetching)
- Tailwind CSS
- React Icons
- React Hot Toast
- i18next (Internationalization)

## API Used
In his project I used this fake api:
**https://dummyjson.com/products**


## Learning Goals Achieved
This project demonstrates understanding of:

- When to use Context API vs Redux Toolkit
- How to manage server state using React Query
- Clean separation of UI vs global state
- Real-world cart management logic
- API-driven UI with pagination and filtering


## How to Run the Project
npm install
npm run dev

- Or you can use the live deplyed link: **https://product-catalog-w4at.onrender.com/products**

## Demo screenshots:
<img width="1512" height="900" alt="Screenshot 2026-05-05 at 9 55 26 pm" src="https://github.com/user-attachments/assets/26062ee7-0f1f-4387-a71f-3e12cab0aa08" />
<img width="1512" height="900" alt="Screenshot 2026-05-05 at 9 55 39 pm" src="https://github.com/user-attachments/assets/1a339dde-a06b-4fc0-b7e7-85f7a41b1b26" />
<img width="1512" height="900" alt="Screenshot 2026-05-05 at 9 55 45 pm" src="https://github.com/user-attachments/assets/a88e68f4-87cc-432f-9007-105ac0d8d0be" />
<img width="1512" height="900" alt="Screenshot 2026-05-05 at 9 55 52 pm" src="https://github.com/user-attachments/assets/b3969b7c-d159-4f47-b444-e41de8d58fad" />


