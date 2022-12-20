import { createPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireAdmin, requireLogin, requireRistorante } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireLogin(user)
    requireRistorante(user)

    const { plateDelete } = await readBody(event)
    const connection = await createPrivilegedConnection()

     await connection.execute(
        `DELETE FROM menu 
        WHERE food_name = ?`,
       [plateDelete]
    )
    return { message: "Plate Deleted Successfully" }
})