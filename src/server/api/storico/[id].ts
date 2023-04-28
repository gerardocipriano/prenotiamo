import { getConnection } from "~/server/utils/db"

export default defineEventHandler(async function(event) {
  const connection = await getConnection()
  const [results] = await connection.execute(
    `SELECT  food_name, note, DAY(date) as day, MONTH(date) as month, YEAR(date) as year
     FROM daily_order_list
     WHERE daily_order_list.user_id=?`,
    [event.context.params.id]
  )
  return results
})

