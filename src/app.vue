<script lang="ts">
import { User } from "~/types"

export default defineComponent({
  // Fornisce l'oggetto user a tutti i componenti dell'applicativo
  provide() {
    return {
      user: computed(() => this.user)
    }
  },
  data() {
    return {
      user: null as User | null
    }
  },
  methods: {
    async getUser() {
      const user = await $fetch("/api/auth/profilo")
      this.user = user
    },
    async logout() {
      await $fetch("/api/auth/logout").then(() => window.location.href = "/")
      this.getUser()
    }
  },
  mounted() {
    this.getUser()
  }
})
</script>

<template>
    <Head>
            <Title>Prenotiamo!</Title>
            <Meta name="description" content="Prenotiamo!.app" />
            <Meta charset="utf-8" />
            <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div class="container-fluid min-vh-100">
        <div class="row justify-content-center">
            <header class="header bg-gradient col-10 bg-blue border-top border-bottom border-2 border-secondary border-opacity-50 rounded-top shadow-lg">
                <div class="d-flex align-items-center justify-content-between p-3">
                    <div class="invisible">
                            <div class="fw-semibold mr-2 text-center d-none d-lg-block">Non sei registrato?</div>
                            <NuxtLink class="btn btn-dark" to="/register">Sign Up</NuxtLink> 
                    </div>
                    <img class="border border-2 border-secondary border-opacity-50 rounded img-fluid" src="/img/splash_screen.jpeg" width="120" height="150" alt="prenotiamo splash screen" />
                    <div class="text-center pb-1">
                            <div v-if="!user" class="fw-semibold  mr-2 text-center d-none d-md-block">Non sei registrato?</div>
                            <NuxtLink v-if="!user" class="btn btn-dark" to="/register">Sign Up</NuxtLink> 
                            <li v-else class="list-group-item"><a href="#" class="btn btn-dark" @click.prevent="logout">Logout</a></li>
                    </div>
                </div>
            </header>
            <div class="col-10 bg-light min-vh-100 border-bottom border-2 border-secondary border-opacity-50 rounded shadow-lg">
                <div class="row mt-3">
                    <nav class="col-lg-1 mt-1 mb-4">
                        <ul class="nav nav-fill flex-lg-column flex-row text-center justify-content-around">
                            <li class="nav-item border-3 border-bottom border-primary border-opacity-50 rounded-pill">
                                <NuxtLink class="nav-link text-dark text-decoration-none fw-semibold" to="/">Home</NuxtLink>
                            </li>
                            <li class="nav-item border-3 border-bottom border-primary border-opacity-50 rounded-pill">
                                <NuxtLink class="nav-link text-dark text-decoration-none fw-semibold" to="/menu">Menu</NuxtLink>
                            </li>
                            <li class="nav-item border-3 border-bottom border-primary border-opacity-50 rounded-pill">
                                <NuxtLink class="nav-link text-dark text-decoration-none fw-semibold" to="/prenota">Prenota</NuxtLink>
                            </li>
                            <li class="nav-item border-3 border-bottom border-primary border-opacity-50 rounded-pill">
                                <NuxtLink class="nav-link text-dark text-decoration-none fw-semibold" to="/storico">Storico</NuxtLink>
                            </li>
                            <li class="nav-item border-3 border-bottom border-primary border-opacity-50 rounded-pill">
                                <NuxtLink class="nav-link text-dark text-decoration-none fw-semibold" to="/delega">Delega</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <main class="col-lg-11">
                        <NuxtPage/>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "~/assets/styles/_bootstrap_sass_assets.scss";

.header{
    background-color: $blue-400;
}
.nav-item:active {
    border-style: solid;
}
.container-fluid {
    background-image: url('/img/background-image-3.jpg');
    background-size: 60%;
}
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>

