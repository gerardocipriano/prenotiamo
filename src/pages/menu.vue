<script lang="ts">
import { userInfo } from "os"
import { Piatto } from "../types"

export default defineComponent({
  data() {
    return {
      Portate: {
      Antipasti: [] as Piatto[],
      Primi: [] as Piatto[],
      Secondi: [] as Piatto[],
      Pizze: [] as Piatto[]
      },
      User: "",
      Food_name: "",
      Note: ""
    }
  },
  methods: {
    getAntipasti() {
      $fetch("/api/menu/antipasti").then(response => this.Portate.Antipasti = response as Piatto[])
    },
    getPrimi() {
      $fetch("/api/menu/primi").then(response => this.Portate.Primi = response as Piatto[])
    },
    getSecondi() {
      $fetch("/api/menu/secondi").then(response => this.Portate.Secondi = response as Piatto[])
    },
    getPizze() {
      $fetch("/api/menu/pizze").then(response => this.Portate.Pizze = response as Piatto[])
    },
    onSubmit() {
      $fetch("/api/menu", {
        method: "POST",
        body: {
          User: this.User,
          Food_name: this.Food_name,
          Note: this.Note
        }
      })
        .then(() => window.location.href = "/menu")
        .catch((e) => alert(e))
    }
  },
  mounted() {
    this.getAntipasti()
    this.getPrimi()
    this.getSecondi()
    this.getPizze()
  }
})
</script>
<template>
  <div class="container text-center">
    <div v-for="portata,key in Portate">
      <h1>{{key}}</h1>
      <div v-for="piatto in portata" class="card mb-3">
        <div class="row">
          <div class="col-lg-4">
            <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start img-thumbnail" >
          </div>
          <div class="col-lg-8">
              <div class="card-body mt-3">
                <h3 class="card-title">{{piatto.food_name}}</h3>
                <h4 class="card-text text-primary">{{piatto.price}}€</h4>
                <button type="button" @click="onSubmit" class="btn btn-dark">Aggiungi</button>
              </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

