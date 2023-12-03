# Portfolio Server
<a name="top"></a>

This is the server for my portfolio website. It's built with Node.js, Apollo Server, MongoDB, and Cloudinary.

## Table of Contents

1. [About The Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)

## About The Project

This server powers the backend for my portfolio website. It provides a GraphQL API for fetching and managing data related to my projects and skills.
<p align="left">(<a href="#top">back to top</a>)</p>


## Built With

- Node.js
- Apollo Server
- MongoDB
- Cloudinary
<p align="left">(<a href="#top">back to top</a>)</p>


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
<p align="left">(<a href="#top">back to top</a>)</p>


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
<p align="left">(<a href="#top">back to top</a>)</p>

## License

This project is licensed under the MIT License:

MIT License

Copyright (c) [2023] [Javier Guerra]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<p align="left">(<a href="#top">back to top</a>)</p>
