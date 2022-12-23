<script lang="ts">
import { History, User } from "~/types"

definePageMeta({
  middleware: ["require-login"]
})

export default defineComponent({
  setup() {
    return {
      user: inject("user") as User | null
    }
  },
  data() {
    return {
      Storico: [] as History[]
    }
  },
  methods: {
    getHistory() {
      if(this.user?.role == "Ristorante"){
        $fetch("/api/storico/").then(response => this.Storico = response as History[])
      }
      else {
        $fetch("/api/storico/" + this.user?.id).then(response => this.Storico = response as History[])
      }
    }
  },
  mounted() {
    this.getHistory()
  },
  updated(){
    this.getHistory()
  }
})

</script>
<template>
  <div class="container text-center">
    <h1>Storico</h1>
    <section class="mt-1">
      <table id="table" class="table table-striped table-hover">
        <thead>
          <tr>
              <th id="date">Data</th>
              <th id="dish">Piatto</th>
              <th id="note">Note</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="order in Storico">
            <td>{{ order.day}}/{{ order.month }}/{{order.year}}</td>
            <td>{{ order.food_name }}</td>
            <td>{{ order.note }}</td>
          </tr>
        </tbody>  
      </table>
    </section>
  </div>
</template>
  
