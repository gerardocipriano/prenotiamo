import { createPrivilegedConnection } from "~/server/utils/db"
import { decodingUser, requireLogin, requireRistorante } from "../../utils/auth"

export default defineEventHandler(async function(event) {

    const user = decodingUser(event)
    requireLogin(user)
    requireRistorante(user)

    const { plateName, platePrice,  course } = await readBody(event)
    const connection = await createPrivilegedConnection()

     await connection.execute(
        `INSERT INTO menu (food_name, price, course ) 
        VALUES (?, ?, ?)`,
       [plateName, platePrice, course]
    )
    return { message: "Plate added successfully" }
})
