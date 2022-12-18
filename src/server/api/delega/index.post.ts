import { createPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireLogin } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireLogin(user)

    const date = new Date()
    const dataordine = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")
    
    const { user_id, dish,  note } = await readBody(event)
    const connection = await createPrivilegedConnection()

     await connection.execute(
        `INSERT INTO daily_order_list (date, user_id, food_name, note) 
        VALUES (?, ?, ?, ?)`,
       [dataordine, user_id, dish, note]
    )
    return { message: "Order Submitted as Successfully" }
})
