<script lang="ts">
import { Piatto } from "../types"
import {ref} from 'vue';
const dish = ref('');

definePageMeta({
  middleware: ["require-login"]
})


export default defineComponent({
  data() {
    return {
      Portate: {
      Antipasti: [] as Piatto[],
      Primi: [] as Piatto[],
      Secondi: [] as Piatto[],
      Pizze: [] as Piatto[],
      },
      dish,
      note: "",
    }
  },
  methods: {
    getAntipasti() {
      $fetch("/api/menu/antipasti").then(response => this.Portate.Antipasti = response as Piatto[])
    },
    getPrimi() {
      $fetch("/api/menu/primi").then(response => this.Portate.Primi = response as Piatto[])
    },
    getSecondi() {
      $fetch("/api/menu/secondi").then(response => this.Portate.Secondi = response as Piatto[])
    },
    getPizze() {
      $fetch("/api/menu/pizze").then(response => this.Portate.Pizze = response as Piatto[])
    },
    sendOrder(dish: string) {
      this.dish = dish;
      console.log(dish)
      $fetch("/api/menu/", {
        method: "POST",
        body: {
          dish: this.dish,
          note: this.note,
        }
      })
      .then(() => window.location.href = "/prenota")
      .catch((e) => alert(e))
    },
  },
  mounted() {
    this.getAntipasti()
    this.getPrimi()
    this.getSecondi()
    this.getPizze()
  }
})
</script>
<template>
  <div class="container text-center">
    
    <label class="form-label" for="note"><input type="text" id="note" name="note" v-model="note" class="form-control"  />Inserisci qui le -eventuali- note per la mensa, PRIMA di premere il tasto "Aggiungi"</label>
    <div v-for="portata,key in Portate">
      <h2>{{key}}</h2>
      <div v-for="piatto in portata" class="card mb-3">
        <div class="row">
          <div class="col-lg-4">
            <img :src="'/img/food/'+ 'plate' + piatto.img_id + '.jpg'"  alt="" style="height: ;" class="img-fluid rounded-start img-thumbnail" >
          </div>
          <div class="col-lg-8">
              <div class="card-body mt-3">
                <h3 class="card-title">{{piatto.food_name}}</h3>
                <h4 class="card-text text-primary">{{piatto.price}}€</h4>
                <button type="button" @click="sendOrder(piatto.food_name)" class="btn btn-dark">Aggiungi</button>
              </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

