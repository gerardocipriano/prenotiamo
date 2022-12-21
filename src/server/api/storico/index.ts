import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT  food_name, note, DAY(date) as day, MONTH(date) as month, YEAR(date) as year
    FROM daily_order_list
    `
  )
  return results
})

