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
    sendMail(){
      $fetch("/api/prenota/mail");
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
            <th id="name">Nome</th>
            <th id="company">Azienda</th>
            <th id="dish">Piatto</th>
            <th id="note">Note</th>
        </tr>
      </thead>
      <tr v-for="orders in DailyOrder">
        <td>{{ orders.name }}</td>
        <td>{{ orders.company }}</td>
        <td>{{ orders.food_name }}</td>
        <td>{{ orders.note }}</td>
      </tr>
    </table>
  </section>
  <button type="button" @click="sendMail()"  class="btn btn-primary btn-rounded">Prenota</button>
</div>
</template>


  
  