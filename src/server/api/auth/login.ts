import bcrypt from "bcrypt"

import { codingUser, decodingUser, requireLogout } from "~/server/utils/auth"
import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function(event) {
  // Blocca la richiesta se l'utente ha già effettuato il login
  const utente = decodingUser(event)
  requireLogout(utente)

  // Estrae username e password dal body della richiesta
  const { email, password } = await readBody(event)
  // Esegue la query al database per ottenere i dati dell'utente in base allo username
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT *
    FROM user 
    WHERE email=?`,
    [email]
  )

  // Errore se l'utente non è stato trovato
  if (!Array.isArray(results) || results.length == 0) {
    throw createError({ statusCode: 400, statusMessage: "Missing mail Credentials"})
  }

  const user = results[0] as any

  // Confronta l'hash della password fornita con quello nel database
  const passwordCorretta = await bcrypt.compare(password, user.password)

  // Errore se la password è errata
  if (!passwordCorretta) {
    throw createError({ statusCode: 400, statusMessage: "Invalid Credentials"})
  }

  // Rimuove la password dall'oggetto utente
  delete user.password

  // Crea un JWT contenente i dati dell'utente e lo imposta come cookie
  codingUser(event, user)

  return { message: "Logged in Successfully" }
})

