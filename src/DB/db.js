const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'YOUR_MYSQL_HOST',
  user: 'YOUR_MYSQL_USER',
  password: 'YOUR_MYSQL_PASSWORD',
  database: 'YOUR_MYSQL_DATABASE',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
