<script  lang="ts">
import { History, User } from "../../types"


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
        $fetch("/api/storico/" + this.$route.params.id).then(response => this.Storico = response as History[])
      }
    }
  },
  mounted() {
    this.getHistory()
  }
})
</script>

<template>
    <div class="container text-center">
      <h1>Storico Ordini</h1>
      <section class="mt-1">
        <table class="table table-striped">
          <thead class="black white-text">
            <tr>
                <th id="date">Data</th>
                <th id="food">Piatto</th>
                <th id="price">Prezzo</th>
                <th id="note">Note</th>
            </tr>
          </thead>
          <tr v-for="historicrow in Storico">
            <td>{{ historicrow.date }}</td>
            <td>{{ historicrow.food_name }}</td>
            <td>{{ historicrow.note }}</td>
          </tr>
        </table>
      </section>
    </div>
    </template>

