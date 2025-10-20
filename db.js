// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sayuri',
  password: 'sa5910',
  database: 'form_db'
});

module.exports = connection;