# Amazon Scraping

## Overview

This project scrapes product information from Amazon search results based on a keyword. It extracts data such as image, title, rating and number of reviews for the first listed items on the page.

> **Note:** Excessive scraping of Amazon may lead to IP blocking. This project is for educational purposes only.

## Features

- Keyword-based search scraping
- Extracts product image, title, rating and number of reviews
- Modular structure using Bun (Express + Axios + JSDOM)
- Simple frontend for triggering search and displaying results in cards

## Technologies Used

- **Backend:** Bun runtime, Express, Axios, JSDOM  
- **Frontend:** HTML, CSS, Vanilla JavaScript (Vite)

## Project Structure

```bash
amazon-scraping
├── backend
│ ├── routes
│ ├── services
│ ├── utils
│ └── index.ts
├── frontend
│ ├── index.html
│ ├── style.css
│ └── main.js
├── README.md
└── bunfig.toml
```

## Setup and Usage

### 1. Clone the Repository

```bash
git clone https://github.com/olszewskioc/amazon-scraping.git
cd amazon-scraping
```

### 2. Install Dependencies

- Backend (Bun)
    ```bash
    cd backend
    bun install
    ```
- Frontend (Vite)
    ```bash
    cd ../frontend
    npm install
    ```

### 3. Run the Application
- Start Backend Server
    ```bash
    cd backend
    bun run index.ts
    ```
- Start Frontend
    ```bash
    cd ../frontend
    npm run dev
    ```

### 4. Access the App
Open your browser at: http://localhost:5173

## Example
1. Entering the keyword "laptop" will return a list of products with basic information like:

> Product Image

> Product name

> Average rating

> Number of reviews

## Limitations
- Only scrapes the first page of results

- Some products may not have complete data (e.g., price or reviews)

- Amazon layout changes may break the selectors

---

Created by [Thiago Olszewski](https://github.com/olszewskioc)

<img src="https://github.com/olszewskioc.png" alt="Thiago Olszewski" width="80" height="80" style="border-radius: 50%; margin-top: 10px;" />