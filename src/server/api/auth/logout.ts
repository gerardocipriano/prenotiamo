import { decodingUser, requireLogin, deleteCookie } from "~/server/utils/auth"

export default defineEventHandler(async function(event) {
  // Blocca la richiesta se l'utente non ha effettuato il login
  const user = deleteCookie(event)
  requireLogin(user!)
  // Cancella il cookie contenente l'access token
  deleteCookie(event)
  return { message: "Logged Out" }
})
