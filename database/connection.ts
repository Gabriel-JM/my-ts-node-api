import mysql2 from 'mysql2'

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    waitForConnections: true
})

export default pool.promise()