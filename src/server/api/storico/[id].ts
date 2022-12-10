import { createConnection } from "~/server/utils/db"
import { History } from "~/types"

export default defineEventHandler(async function(event) {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT  daily_order_list.date, menu.food_name, menu.price, daily_order_list.note 
     FROM daily_order_list, menu 
     WHERE daily_order_list.food_name=menu.food_name 
     AND daily_order_list.user_id=?`,
    [event.context.params.id]
  )
  return results
})

