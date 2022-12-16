import { createPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireLogin } from "../../utils/auth"

export default defineEventHandler(async function(event) {
    const user = decodingUser(event)
    requireLogin(user)

    const { food_name, note } = await readBody(event)
    console.log(food_name, note, user?.id)
    const connection = await createPrivilegedConnection()
    const [results] = await connection.execute(
        `INSERT INTO daily_order_list (food_name, note, user_id)
        VALUES (?, ?,?)`,
       [food_name, note, user?.id]
    )
    return { message: "Order placed with success." }
})
