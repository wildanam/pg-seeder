# 📦 PostgreSQL database seeder with node.js

This project provides a simple way to seed a PostgreSQL database using a JSON file and Node.js.

# Requirements

- Node.js installed
- PostgreSQL running
- NPM packages: `pg`, `dotenv`

Install dependencies:
```bash
npm install pg dotenv
```

# `.env` file

Replace with your DB config

```env
PGHOST=localhost
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=your_db_name
PGPORT=5432
```

# Sample `data.json`

You can replace the content of `data.json` with yours. Here's the example:

```json
[
  {
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

# PostgreSQL table

Make sure your table looks like the same with your `json` structure.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);
```

# Run the seeder

```bash
node seed.js
```