<script lang="ts">
import { Piatto } from "../types"

export default defineComponent({
  data() {
    return {
      Menu: [] as Piatto[],
      Antipasti: [] as Piatto[],
      Primi: [] as Piatto[],
      Secondi: [] as Piatto[],
      Pizze: [] as Piatto[]
    }
  },
  methods: {
    getMenu() {
      $fetch("/api/menu/").then(response => this.Menu = response as Piatto[])
    },
    getAntipasti() {
      $fetch("/api/menu/antipasti").then(response => this.Antipasti = response as Piatto[])
    },
    getPrimi() {
      $fetch("/api/menu/primi").then(response => this.Primi = response as Piatto[])
    },
    getSecondi() {
      $fetch("/api/menu/secondi").then(response => this.Secondi = response as Piatto[])
    },
    getPizze() {
      $fetch("/api/menu/pizze").then(response => this.Pizze = response as Piatto[])
    },
  },
  mounted() {
    this.getMenu()
    this.getAntipasti()
    this.getPrimi()
    this.getSecondi()
    this.getPizze()
  }
})
</script>

<template>
<div class="container text-center">
  <h1>Antipasti</h1>
    <div v-for="piatto in Antipasti" class="card mb-3">
      <div class="row">
        <div class="col-md-4">
          <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start img-thumbnail" >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{piatto.food_name}}</h2>
            <p class="card-text">Price: {{piatto.price}}$</p>
            <button type="button" class="btn btn-primary">Aggiungi</button>
          </div>
        </div>
      </div> 
    </div>
    <h1>Primi</h1>
    <div v-for="piatto in Primi" class="card mb-3">
      <div class="row">
        <div class="col-md-4">
          <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start img-thumbnail" >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{piatto.food_name}}</h2>
            <p class="card-text">Price: {{piatto.price}}$</p>
            <button type="button" class="btn btn-primary">Aggiungi</button>
          </div>
        </div>
      </div> 
    </div>
    <h1>Secondi</h1>
    <div v-for="piatto in Secondi" class="card mb-3">
      <div class="row">
        <div class="col-md-4">
          <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start img-thumbnail" >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{piatto.food_name}}</h2>
            <p class="card-text">Price: {{piatto.price}}$</p>
            <button type="button" class="btn btn-primary">Aggiungi</button>
          </div>
        </div>
      </div> 
    </div>
    <h1>Pizze</h1>
    <div v-for="piatto in Pizze" class="card mb-3">
      <div class="row">
        <div class="col-md-4">
          <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start img-thumbnail" >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{piatto.food_name}}</h2>
            <p class="card-text">Price: {{piatto.price}}$</p>
            <button type="button" class="btn btn-primary">Aggiungi</button>
          </div>
        </div>
      </div> 
    </div>
</div>
</template>





<!-- <img :src="('/img/' + piatto.imgpiatto)" alt="" class="img-fluid rounded-start">
<template>
<div class="container text-center">
  <h1>Antipasti</h1>
    <div v-for="piatto in Menu" class="card mb-3">
      <div class="row">
        <div class="col-md-4">
          <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start img-thumbnail" >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{piatto.food_name}}</h2>
            <p class="card-text">Price: {{piatto.price}}$</p>
          </div>
        </div>
      </div> 
    </div>
</div>
</template>

-->
