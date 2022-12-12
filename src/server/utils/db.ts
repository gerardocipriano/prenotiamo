import mysql from "mysql2/promise"
import dotenv from 'dotenv';



export function createConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_SERVICE_USER,
    password: process.env.DB_SERVICE_USER_PASSWORD,
    database: "prenotiamo"
  })
}
