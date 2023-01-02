<script lang="ts">
import { DailyOrder } from "../types"
import { User } from "~/types"

definePageMeta({
  middleware: ["require-login"]
})


const date = new Date()
const day = date.getDate().toString().padStart(2, "0") + "/" +(date.getMonth() + 1).toString().padStart(2, "0") 

export default defineComponent({
  
  setup() {
    return {
      user: inject("user") as User | null
    }
  },
  data() {
    return {
      DailyOrder: [] as DailyOrder[],
      day,
    }
  },
  methods: {
    getDailyOrders() {
      $fetch("/api/prenota/").then(response => this.DailyOrder = response as DailyOrder[])
    },
    sendMail(){
      $fetch("/api/prenota/mail",{
        method: "POST",
        body: this.DailyOrder
      });
    },
    deletePlate(){
      $fetch("/api/prenota/delete", {
        method: "POST",
        body: {
          plateDelete: this.user?.id,
        }
      })
      .then(() => window.location.href = "/prenota")
      .catch((e) => alert(e))
    }
  },
  mounted() {
    this.getDailyOrders()
  }
})

</script>

<template>
<div class="container text-center">
  <h1>Ordini del {{ day }}</h1>
  <section class="mt-1">
    <table id="table" class="table table-striped">
      <thead>
        <tr>
            <th id="name">Nome</th>
            <th id="company">Azienda</th>
            <th id="dish">Piatto</th>
            <th id="note">Note</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="orders in DailyOrder">
          <td>{{ orders.name }}</td>
          <td>{{ orders.company }}</td>
          <td>{{ orders.food_name }}</td>
          <td>{{ orders.note }}</td>
          <button v-if="user?.id==orders.id" type="button" @click="deletePlate()" class="btn btn-rounded btn-outline-danger fw-semibold">Elimina</button>
        </tr>
      </tbody> 
    </table>
  </section>
  <button v-if="user?.role=='Ordinante'" type="button"  @click="sendMail()"  class="btn btn-dark btn-rounded">Prenota</button>
</div>
</template>


  
  