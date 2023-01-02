import { createPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireLogin, } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireLogin(user)

    const { plateDelete } = await readBody(event)
    const connection = await createPrivilegedConnection()

     await connection.execute(
        `DELETE FROM daily_order_list
        WHERE (date=CURDATE()) AND (user_id=?)`,
       [plateDelete]
    )
    return { message: "Plate Deleted Successfully" }
})

