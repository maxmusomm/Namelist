const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

module.exports = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});
