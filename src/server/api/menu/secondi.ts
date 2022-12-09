import { createConnection } from "~/server/utils/db"
import { Piatto } from "~/types"

export default defineEventHandler(async function() {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT *
     FROM menu WHERE course="secondi"`
  )
  return results
})
