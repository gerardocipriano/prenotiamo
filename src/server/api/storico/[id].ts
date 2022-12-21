import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function(event) {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT  *
     FROM daily_order_list
     WHERE daily_order_list.user_id=?`,
    [event.context.params.id]
  )
  return results
})

