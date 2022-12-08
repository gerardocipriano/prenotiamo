import mysql from "mysql2/promise"

export function createConnection() {
  return mysql.createConnection({
    host: "casper-3.mysql.database.azure.com",
    user: "prenotiamo_svc_ws",
    password: "fvne45GHmy2chy6dsm",
    database: "prenotiamo"
  })
}
