import { getConnection } from "~/server/utils/db"
import { Piatto } from "~/types"

export default defineEventHandler(async function() {
  const connection = await getConnection()
  const [results] = await connection.execute(
    `SELECT *
     FROM menu WHERE course= "antipasti"`
  )
  connection.release()
  return results
})
