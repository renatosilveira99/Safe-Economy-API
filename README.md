# Safe Economy API

**Safe Economy API** is a RESTful API developed using AdonisJS for a Software Engineering course project. This application allows users to manage their balance, register bills, and make payments, effectively controlling their current balance. The API supports user registration, authentication, and basic CRUD operations for managing accounts.

## Features

- **User Registration and Authentication**: Secure user management with registration and login capabilities.
- **Balance Management**: Update and retrieve user balance.
- **Account Management**: CRUD operations for managing bills and payments.
- **Authenticated Endpoints**: Protected routes requiring user authentication.

## Endpoints

- **Authentication**
  - `POST /register`: Register a new user.
  - `POST /authenticate`: Authenticate a user and receive a token.

- **Balance Management**
  - `PATCH /atualizaSaldo/:id`: Update the balance for a user.

- **Account Management (Authenticated)**
  - `POST /contas`: Create a new bill.
  - `GET /contas`: List all bills.
  - `DELETE /contas/:id`: Delete a bill.
  - `GET /retornaContas/:id`: Retrieve bills for a specific user.

- **User Management**
  - `GET /usuarios`: List all users.

## Installation

To set up and run the API locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/renatosilveira99/safe-economy-api
   cd safe-economy-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and set up the required configuration values. Example environment variables:

   ```env
   DB_CONNECTION=pg
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_DATABASE=your_db_name
   JWT_SECRET=your_jwt_secret
   ```

4. **Run migrations:**

   ```bash
   node ace migration:run
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

6. **Run tests (if applicable):**

   ```bash
   npm test
   ```

## Acknowledgments

Special thanks to the AdonisJS community and documentation for their support.
