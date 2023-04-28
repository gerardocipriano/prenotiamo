import { getConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await getConnection()
  const [results] = await connection.execute(
    `SELECT  daily_order_list.food_name, daily_order_list.date, daily_order_list.note, user.company, user.name, user.id
    FROM daily_order_list JOIN user ON daily_order_list.user_id=user.id
    WHERE date >= CURDATE()
    ORDER BY company
    `
  )
  return results
})
