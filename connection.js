// db.js

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  database: 'recipes',
  password: 'Admin123',
  port: 5432,
});

module.exports = client;
