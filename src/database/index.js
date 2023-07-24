const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db', // This refers to the "db" service defined in docker-compose.yml
  user: 'root',
  password: 'your-root-password', // Replace with the actual root password
  database: 'mini_game_change_color',
  port: '3308',
});

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'your-root-password', // Use the same root password set during container initialization
// });



connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = connection;