export default defineNuxtRouteMiddleware(async function() {
    const utente = await $fetch("/api/auth/profilo")
    if (!utente) {
      return navigateTo("/login")
    }
  })
  