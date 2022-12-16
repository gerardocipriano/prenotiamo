import { decodingUser, requireLogin, removeUser } from "~/server/utils/auth"

export default defineEventHandler(async function(event) {
  // Blocca la richiesta se l'utente non ha effettuato il login
  const user = decodingUser(event)
  requireLogin(user)
  // Cancella il cookie contenente l'access token
  removeUser(event)
  return { message: "Logged Out" }
})
