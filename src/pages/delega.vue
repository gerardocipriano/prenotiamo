<script lang="ts">
import { Piatto, User} from "../types"

definePageMeta({
  middleware: ["require-login","require-ordinante"]
})


export default defineComponent({
  data() {
    return {
      User: [] as User[],
      delegatedUser: [],
      deleteDelegatedUser: [],
      delegatedDish: "",
      delegatedNote: "",
      Portata: [] as Piatto [],
    }
  },
  methods: {
    getFood() {
      $fetch("/api/delega/food").then(response => this.Portata = response as Piatto[])
    },

    getUser() {
      $fetch("/api/delega/user").then(response => this.User = response as User[])
    },
    sendOrderOnBehalfOf() {
      $fetch("/api/delega/", {
        method: "POST",
        body: {
          user_id: this.delegatedUser[0],
          dish: this.delegatedDish,
          note: this.delegatedNote,
        }
      })
      .then(() => window.location.href = "/delega")
      .catch((e) => alert(e))
    },
    deleteOrderOnBehalfOf() {
      $fetch("/api/delega/delete", {
        method: "POST",
        body: {
          user_id: this.deleteDelegatedUser[0],
        }
      })
      .then(() => window.location.href = "/delega")
      .catch((e) => alert(e))
    },
  },
  mounted() {
    this.getFood()
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
                    <form @submit.prevent="sendOrderOnBehalfOf()" class="mx-1 mx-md-3" >
                      <h3>Aggiunta manuale ordine</h3>
                        <p>Seleziona l'utente per cui vuoi aggiungere l'ordine:</p>
                        <label class="form-label" for="note"><input type="text" id="note" name="note" v-model="delegatedNote" class="form-control"  />Inserisci qui le -eventuali- note per la mensa, PRIMA di premere il tasto "Invia Ordine"</label>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <label class="form-label" for="dUser">
                            <select type="text" id="dUser" name="dUser" v-model="delegatedUser" class="form-select form-outline flex-fill mb-0" required>
                            <option selected disabled>Utente</option>
                              <option v-for="x in User">{{ x.id }} - {{ x.name }}</option>
                            </select>Seleziona l'utente</label>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-3">
                          <label class="form-label" for="Dish"><select type="text" id="Dish" name="Dish" v-model="delegatedDish" class="form-select form-outline flex-fill mb-0" required>
                            <option selected disabled>Piatto</option>
                              <option v-for="piatto in Portata">{{ piatto.food_name }}</option>
                          </select>Seleziona il piatto</label>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <input type="submit" name="submit" value="Invia ordine" class="btn btn-primary btn-lg"/>
                        </div>
                      </form>


                      <form @submit.prevent="deleteOrderOnBehalfOf()" class="mx-1 mx-md-3" >
                        <h3>Elimina manuale ordine</h3>
                        <p>Seleziona l'utente per cui vuoi eliminare l'ordine:</p>
                        <div class="d-flex flex-row align-items-center mb-3">
                          <label class="form-label" for="dDUser">
                            <select type="text" id="dDUser" name="dDUser" v-model="deleteDelegatedUser" class="form-select form-outline flex-fill mb-0" required>
                            <option selected disabled>Utente</option>
                              <option v-for="x in User">{{ x.id }} - {{ x.name }}</option>
                            </select>Seleziona l'utente</label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <input type="submit" name="submit" value="Elimina ordine" class="btn btn-danger btn-lg"/>
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
    