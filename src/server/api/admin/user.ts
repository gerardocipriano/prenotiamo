import { createConnection } from "~/server/utils/db"
import { decodingUser, requireAdmin, requireLogin, requireOrdinante } from "../../utils/auth"

export default defineEventHandler(async function(event) {
  const user = decodingUser(event)
  requireLogin(user)
  requireAdmin(user)

  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT name, id
    FROM prenotiamo.user
    `
  )
  return results
})
