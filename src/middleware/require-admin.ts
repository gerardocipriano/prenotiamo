export default defineNuxtRouteMiddleware(async function() {
    const utente = await $fetch("/api/auth/session")
    if (utente?.role!="Admin") {
       throw createError({ statusCode: 401, statusMessage: "Unauthorized"})
    }
  })
  