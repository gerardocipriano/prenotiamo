<script lang="ts">
import { User, Role } from "../types"

definePageMeta({
  middleware: ["require-admin"]
})

export default defineComponent({
  data() {
    return {
      User: [] as User[],
      role: [] as Role[],
      promoteUser: [],
      promoteRole: "",
    }
  },
  methods: {
    getUser() {
      $fetch("/api/admin/user").then(response => this.User = response as User[])
    },
    setRole() {
      $fetch("/api/admin/", {
        method: "POST",
        body: {
          user_id: this.promoteUser[0],
          role: this.promoteRole
        }
      })
      .then(() => window.location.href = "/admin")
      .catch((e) => alert(e))
    },
  },
  mounted() {
    this.getUser()
  }
})
</script>

<template>
    <section class="vh-100" style="background-color: #eee;">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                    <form @submit.prevent="setRole()" class="mx-1 mx-md-3" >
                      <h3>User Role Management</h3>
                        <p>Seleziona l'utente, poi il nuovo ruolo</p>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <label class="form-label" for="form3Example3c">
                            <select type="text" id="User" name="User" v-model="promoteUser" class="form-select form-outline flex-fill mb-0" required>
                            <option selected disabled>Utente</option>
                              <option v-for="x in User">{{ x.id }} - {{ x.name }}</option>
                            </select>Seleziona l'utente</label>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <label class="form-label" for="form3Example3c"><select type="text" id="User" name="User" v-model="promoteRole" class="form-select form-outline flex-fill mb-0" required>
                            <option selected disabled>Ruolo</option>
                              <option >Admin</option>
                              <option >Ordinante</option>
                              <option >Ristorante</option>
                              <option >Generico</option>
                          </select>Seleziona il ruolo</label>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <input type="submit" name="submit" value="Modifica Autorizzazioni" class="btn btn-warning btn-lg"/>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </template>
    