import mysql from "mysql2/promise"


const privilegedPool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_SERVICE_ADMIN,
  password: process.env.DB_SERVICE_ADMIN_PASSWORD,
  database: process.env.DB_NAME
});

export async function getPrivilegedConnection() {
  return await privilegedPool.getConnection();
}

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_SERVICE_USER,
  password: process.env.DB_SERVICE_USER_PASSWORD,
  database: process.env.DB_NAME
});

export async function getConnection() {
  return await pool.getConnection();
}


