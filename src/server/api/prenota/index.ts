import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT * 
    FROM daily_order_list JOIN user ON daily_order_list.user_id=user.id
    WHERE date >= CURDATE()
    ORDER BY company
    `
  )
  return results
})
