<script  lang="ts">
import { History } from "../../types"

export default defineComponent({
  data() {
    return {
      History: [] as History[]
    }
  },
  methods: {
    getHistory() {
      $fetch("/api/storico/" + this.$route.params.id).then(response => this.History = response as History[])
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
          <tr v-for="historicrow in History">
            <td>{{ historicrow.date }}</td>
            <td>{{ historicrow.food_name }}</td>
            <td>{{ historicrow.price }}</td>
            <td>{{ historicrow.note }}</td>
          </tr>
        </table>
      </section>
    </div>
    </template>

