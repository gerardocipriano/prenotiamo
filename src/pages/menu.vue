<script lang="ts">
import { Piatto } from "../types"

export default defineComponent({
  data() {
    return {
      Menu: [] as Piatto[]
    }
  },
  methods: {
    getMenu() {
      $fetch("/api/menu").then(response => this.Menu = response as Piatto[])
    }
  },
  mounted() {
    this.getMenu()
  }
})
</script>

<template>
<div class="container text-center">
  <h1>Menu</h1>
  <div v-for="piatto in Menu" class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="/img/food_default.jpg" alt="" class="img-fluid rounded-start">
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

<!-- <img :src="('/img/' + piatto.imgpiatto)" alt="" class="img-fluid rounded-start"> -->
