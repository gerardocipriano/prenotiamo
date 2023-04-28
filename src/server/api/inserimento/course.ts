import { getConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await getConnection()
  const [results] = await connection.execute(
    `SELECT course
    FROM prenotiamo.menu
    GROUP BY course
    `
  )
  connection.release()
  return results
})
