# Portfolio Server

This is the server for my portfolio website. It's built with Node.js, Apollo Server, MongoDB, and Cloudinary.

## Table of Contents

1. [About The Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## About The Project

This server powers the backend for my portfolio website. It provides a GraphQL API for fetching and managing data related to my projects and skills.

## Built With

- Node.js
- Apollo Server
- MongoDB
- Cloudinary

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account

### Installation

1. Install NPM packages
  ```sh
  npm install
  ```
2. Create an account with MongoDB
3. Create a Cloudinary Account
4. After creating the accounts necessary, make sure to create a .env file and set up these keys for the project:
```sh
MONGO_URI="Your MongoDB Key that's provided to connect"
CLOUDINARY_CLOUD_NAME="This is found after you create a Cloudinary account"
CLOUDINARY_API_KEY="This is also found after you create a Cloudinary account"
CLOUDINARY_API_SECRET="This can also be found after creating a Cloudinary account"
```

### Usage

To start the server, run:
  ```sh
  npm start
  ```

To start the server using nodemon, run:
  ```sh
  npm run dev
  ```
Both these commands will start the server on localhost:4000