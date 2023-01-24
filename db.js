// Use the MariaDB Node.js Connect
var mariadb = require('mariadb');

// Create a connection pool
var pool =  mariadb.createPool({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "Peewee#33",
	database: "wendys"
	});
// Expose a method to establish connection to Mariadb
module.exports = Object.freeze({
	pool: pool
	});
