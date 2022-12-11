import { createConnection } from "~/server/utils/db"
import { History } from "~/types"

export default defineEventHandler(async function(event) {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT  *
     FROM daily_order_list join menu on daily_order_list.food_name=menu.food_name
     WHERE daily_order_list.user_id=?`,
    [event.context.params.id]
  )
  return results
})

