<script lang="ts">
import { DailyOrder } from "../types"

export default defineComponent({

  
  data() {
    return {
      DailyOrder: [] as DailyOrder[],
    }
  },
  methods: {
    getDailyOrders() {
      $fetch("/api/prenota/").then(response => this.DailyOrder = response as DailyOrder[])
    },
  },
  mounted() {
    this.getDailyOrders()
  }
})
</script>

<template>
<div class="container text-center">
  <h1>Ordini del giorno {{Date.now()}}</h1>
  <section class="mt-1">
    <table class="table table-striped">
      <thead class="black white-text">
        <tr>
            <th id="username">Username</th>
            <th id="readingTime">Piatto</th>
            <th id="note">Note</th>
        </tr>
      </thead>
      <tr v-for="orders in DailyOrder">
        <td>{{ orders.username }}</td>
        <td>{{ orders.food_name }}</td>
        <td>{{ orders.note }}</td>
      </tr>
    </table>
  </section>
</div>
</template>


  
  