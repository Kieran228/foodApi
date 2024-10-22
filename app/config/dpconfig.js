//! THIS IS OUR DATABASE CONNECTION FILES

const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'food'
});

//todo make our pool variable available to the rest of the program

module.exports = pool;

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("Database connection was closed.");
        };
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error("Database has too many connections.")
        };
        if (err.code === 'ECONNREFUSED') {
            console.error("Database connection was refused.");
        };
    };

    return;
});