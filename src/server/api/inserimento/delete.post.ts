import { getPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireAdmin, requireLogin, requireRistorante } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireLogin(user)
    requireRistorante(user)

    const { plateDelete } = await readBody(event)
    const connection = await getPrivilegedConnection()

     await connection.execute(
        `DELETE FROM menu 
        WHERE food_name = ?`,
       [plateDelete]
    )
    connection.release()
    return { message: "Plate Deleted Successfully" }
})