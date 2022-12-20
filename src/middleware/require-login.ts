export default defineNuxtRouteMiddleware(async function() {
    const utente = await $fetch("/api/auth/session")
    if (!utente) {
      return navigateTo("/login")
    }
  })
  