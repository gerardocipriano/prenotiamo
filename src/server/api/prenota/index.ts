import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT user.username, daily_order_list.food_name, daily_order_list.date, daily_order_list.note 
    FROM daily_order_list, user
     WHERE date >= CURDATE()
    `
  )
  return results
})
