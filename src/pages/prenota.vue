<script lang="ts">
import { DailyOrder } from "../types"
const order_list = document.querySelector('table') as HTMLInputElement | null;

const date = new Date()
const day = date.getDate().toString().padStart(2, "0") + "/" +(date.getMonth() + 1).toString().padStart(2, "0") 

export default defineComponent({
  
  
  data() {
    return {
      DailyOrder: [] as DailyOrder[],
      day,
      order_list,
    }
  },
  methods: {
    getDailyOrders() {
      $fetch("/api/prenota/").then(response => this.DailyOrder = response as DailyOrder[])
    },
    sendMail(){
      $fetch("/api/prenota/mail",{
        method: "POST",
        body: {
          order_list : this.order_list,
          }
      });
    },
  },
  mounted() {
    this.getDailyOrders()
  }
})

</script>

<template>
<div class="container text-center">
  <h1>Ordini del giorno {{ day }}</h1>
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


  
  