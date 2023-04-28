import { getPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireAdmin, requireLogin, requireOrdinante } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireAdmin(user)

    
    const { user_id, role } = await readBody(event)
    const connection = await getPrivilegedConnection()

     await connection.execute(
        `UPDATE prenotiamo.user 
        SET user.role = ? 
        WHERE user.id = ?`,
       [  role, user_id]
    )
    connection.release()
    return { message: "Operation Submitted Successfully" }
})
