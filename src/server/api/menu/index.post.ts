import { createPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireLogin } from "../../utils/auth"

export default defineEventHandler(async function(event) {
    const user = decodingUser(event)
    requireLogin(user)
    const date = new Date()
    const dataordine = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")
    const { dish,  note } = await readBody(event)
    const connection = await createPrivilegedConnection()
     await connection.execute(
        `INSERT INTO daily_order_list (food_name, note, date, user_id)
        VALUES (?, ?, ?, ?)`,
       [dish, note, dataordine, user?.id]
    )
    return { message: "Order placed with success." }
})
