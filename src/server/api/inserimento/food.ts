import { getConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await getConnection()
  const [results] = await connection.execute(
    `SELECT *
    FROM prenotiamo.menu
    `
  )
  connection.release()
  return results
})
