<script lang="ts">
import { Piatto } from "../types"
import {ref} from 'vue';
const dish = ref('');

export default defineComponent({
  data() {
    return {
      plateName: "",
      platePrice: "",
      plateSelect: "",
      plateDelete: "",
      Courses: [],
      foodName: []
    }
  },
  methods: {
    getFood() {
      
    },
    addFood() {
     
    },
    deleteFood() {
     
    },
  },
  mounted() {
    this.getFood()
  }
})
</script>

<template>
    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-top h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black mt-5" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                            <form @submit.prevent="addFood()" class="mx-1 mx-md-3" >
                                <h3>Aggiungi al menu</h3>
                                <div class="row justify-content-center">
                                    <div class="col-lg-4">
                                        <label class="form-label" for="form3Example3c">
                                            <input type="text" id="note" name="note" v-model="plateName" class="form-control"  />Nome piatto
                                        </label>
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="form-label" for="form3Example3c">
                                            <input type="text" id="note" name="note" v-model="platePrice" class="form-control"  />Prezzo
                                        </label>
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="form-label" for="form3Example3c">
                                            <select type="text" id="User" name="User" v-model="plateSelect" class="form-select form-outline flex-fill mb-0" required>
                                                <option selected disabled>Portata</option>
                                                <option v-for="x in Courses">{{ x }}</option>
                                            </select>Seleziona portata
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="submit" name="submit" value="Aggiungi" class="btn btn-primary btn-lg"/>
                                    </div>
                                </div>
                            </form>
                            <form @submit.prevent="deleteFood()" class="mx-1 mx-md-3" >
                                <h3 class="mt-5">Elimina dal menu</h3>
                                <div class="row justify-content-center">
                                    <div class="col">
                                        <label class="form-label" for="form3Example3c">
                                            <select type="text" id="User" name="User" v-model="plateDelete" class="form-select form-outline flex-fill mb-0" required>
                                                <option selected disabled>Piatto</option>
                                                <option v-for="x in foodName">{{ x }}</option>
                                            </select>Seleziona piatto
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="submit" name="submit" value="Elimina" class="btn btn-danger btn-lg"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    