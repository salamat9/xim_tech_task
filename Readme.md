# XIM tech task

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [env file](#env-files)
  - [Database Migrations](#database-migrations)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites
  need mysql to be installed on your local machine

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:salamat9/ximxim.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ximxim
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Env Files

create .env file at root directory with these keys
  ```bash
  PORT=
  DB_USERNAME=
  DB_PASSWORD=
  DB_NAME=
  DB_HOST=
  DB_PORT=
  JWT_SECRET_KEY=s
  JWT_REFRESH_KEY=
  ACCESS_TOKEN_LIFESPAN=
  REFRESH_TOKEN_LIFESPAN=
  ```


### Database Migrations

at src/config/db.json fill these json values with your database credentials it need to work with sequelize
  ```bash
  {
	  "username": "",
	  "password": "",
	  "database": "",
	  "host": "",
	  "dialect": "mysql"
  }
  ```

Before running the application, you need to apply database migrations using Sequelize.

  ```bash
  npx sequelize db:migrate
  ```

### Uploads folder
  at root folder create uploads directory

### Run project 
  ```bash
  npm run dev
  ```  

### Still have questions? Or you can give me feedback.
write me on telegram https://t.me/sa1amat9

