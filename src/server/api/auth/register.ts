
import bcrypt from "bcrypt"
import { codingUser, decodingUser, requireLogout } from "~/server/utils/auth"
import { createPrivilegedConnection } from "~/server/utils/db"

export default defineEventHandler(async function(event) {
  // Blocca la richiesta se l'utente ha già effettuato il login
  const utente = decodingUser(event)
  requireLogout(utente)

  // Estrae username e password dal body della richiesta
  const { name, password, email, company } = await readBody(event)

  // Verifica che l'indirizzo email sia disponibile
  const connection = await createPrivilegedConnection()
  const [users] = await connection.execute(
    "SELECT email FROM user WHERE email=?",
    [email]
  )
  if ((users as any[]).length > 0) {
    throw createError({ statusCode: 400, statusMessage: "email already in use. Please try another one."})
  }

  // Crea l'hash della password per non salvarla in chiaro
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt)

  // Inserisce l'utente nel database
  await connection.execute(
    `INSERT INTO user (name, password, email, company)
     VALUES (?, ?, ?, ?)`,
    [name, passwordHash, email, company]
  )

  // Estrae i dati per il nuovo utente
  const [results] = await connection.execute(
    `SELECT name, email, company FROM user WHERE email=?`,
    [email]
  )
  const user = (results as any)[0] as any

  // Crea un JWT contenente i dati dell'utente e lo imposta come cookie
  codingUser(event, user)

  return { message: "Signed Up Successfully" }
})

