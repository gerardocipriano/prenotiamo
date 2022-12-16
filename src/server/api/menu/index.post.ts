import { createConnection } from "~/server/utils/db"
import { codingUser, decodingUser, requireLogin } from "../../utils/auth"

export default defineEventHandler(async function(event) {
  // Blocca la richiesta se l'utente non ha effettuato il login
  const utente = decodingUser(event)
  requireLogin(utente)

  // Estrae il body della richiesta
  const { user, food_name, note } = await readBody(event)
  // Compone la data di creazione
  const data = new Date()

  // Inserisce l'articolo
  const connection = await createConnection()
  await connection.execute(
    `INSERT INTO daily_order_list (user, food_name, note, data)
     VALUES (?, ?, ?, ?)`,
    [user, food_name, note, data]
  )

  return { message: "Prenotazione inviata con successo" }
})
