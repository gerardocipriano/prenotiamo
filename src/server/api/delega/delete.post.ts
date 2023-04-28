import { getPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireAdmin, requireLogin, requireOrdinante } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireLogin(user)
    requireOrdinante(user)

    const date = new Date()
    const dataordine = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0")
    
    const { user_id } = await readBody(event)
    const connection = await getPrivilegedConnection()

     await connection.execute(
        `DELETE FROM daily_order_list 
        WHERE daily_order_list.date = ? AND daily_order_list.user_id = ?`,
       [dataordine, user_id]
    )
    connection.release()
    return { message: "Order Deleted Successfully" }
})
