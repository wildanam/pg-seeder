require('dotenv').config()
const { Client } = require('pg')
const fs = require('fs')

// Replace with your DB config
const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
})

const seed = async () => {
  try {
    await client.connect()
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

    for (const user of data) {
      await client.query(
        'INSERT INTO users (name, email) VALUES ($1, $2)',
        [user.name, user.email]
      )
    }

    console.log('Database seeded successfully!')
  } catch (err) {
    console.error('Error seeding database:', err)
  } finally {
    await client.end()
  }
}

seed()
