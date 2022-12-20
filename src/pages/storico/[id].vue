<script  lang="ts">
import { History } from "../../types"

definePageMeta({
  middleware: ["require-login", "require-ristorante"]
})

export default defineComponent({
  data() {
    return {
      Storico: [] as History[]
    }
  },
  methods: {
    getHistory() {
      $fetch("/api/storico/" + this.$route.params.id).then(response => this.Storico = response as History[])
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

