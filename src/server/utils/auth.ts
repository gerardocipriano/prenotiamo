import { H3Event } from "h3"
import jwt from "jsonwebtoken"
import { User } from "~/types"

const  JwtSecret:string = process.env.JWT_SECRET!
const cookieName:string = process.env.COOKIE_NAME!

export function codingUser(event: H3Event, user: any) {
  // Crea l'access token con JWT
  const accessToken = jwt.sign(user, JwtSecret, { expiresIn: "1 day" })
  // Imposta l'access token come cookie
  setCookie(event, cookieName, accessToken, {
    httpOnly: true,
    sameSite: true,
    // secure: true
  })
}

export function decodingUser(event: H3Event) {
  // Ottiene il cookie dell'access token
  const accessToken = getCookie(event, cookieName)
  // Restituisce i dati dell'utente contenuti nell'access token, oppure null se il token è mancante o invalido
  if (!accessToken) return null
  try {
    const user = jwt.verify(accessToken, JwtSecret) as User
    return user
  } catch {
    return null
  }
}

export function removeUser(event: H3Event) {
  // Cancella il cookie dell'access token DA VERIFICARE ARGOMENTI
  deleteCookie(event, cookieName)
}

/** Blocca la richiesta se l'utente non ha effettuato il login */
export function requireLogin(utente: User | null) {
  if (utente == null) {
    throw createError({ statusCode: 403, statusMessage: "Forbidden. Log in first." })
  }
}

/** Blocca la richiesta se l'utente ha effettuato il login */
export function requireLogout(utente: User | null) {
  if (utente != null) {
    throw createError({ statusCode: 403, statusMessage: "Forbidden. Log out first." })
  }
}


