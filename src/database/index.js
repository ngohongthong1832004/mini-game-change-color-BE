const mysql = require('mysql');

const connection = mysql.createConnection({
    // host: 'localhost', // replace with your MySQL host
    // user: 'root', // replace with your MySQL username
    // password: '', // replace with your MySQL password
    // database: 'mini-game-change-color', // replace with your MySQL database name

    // The following are not needed for local development
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = connection;