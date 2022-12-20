<script lang="ts">
import { Company } from "../types"

definePageMeta({
  middleware: ["require-logout"]
})

export default defineComponent({
  

  
  data() {
    return {
      Company: [] as Company[],
      registerName: "",
      registerPassword: "",
      registerEmail: "",
      registerCompany: "",

    }
  },
  methods: {
    getCompanies() {
      $fetch("/api/company/").then(response => this.Company = response as Company[])
    },
    onRegisterSubmit() {
      $fetch("/api/auth/register", {
        method: "POST",
        body: {
          name: this.registerName,
          password: this.registerPassword,
          email: this.registerEmail,
          company: this.registerCompany
        }
      })
        .then(() => window.location.href = "/")
        .catch((e) => alert(e))
    }

  },
  mounted() {
    this.getCompanies()
  }
})
</script>


<template>
<section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <h1 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Here</h1>

                <form @submit.prevent="onRegisterSubmit" class="mx-1 mx-md-3" >

                  <div class="d-flex flex-row align-items-center mb-3">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="register-name" name="register-name" v-model="registerName" class="form-control" required/>
                      <label class="form-label" for="register-name">Your Name</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-3">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="register-mail" name="register-mail" v-model="registerEmail" class="form-control" required />
                      <label class="form-label" for="register-mail">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-3">
                    <select type="text" id="register-company" name="register-company" v-model="registerCompany" class="form-select form-outline flex-fill mb-0" required>
                      <label class="form-label" for="register-company">Company</label>
                      <option selected disabled>Company</option>
                        <option v-for="x in Company">{{ x.name }}</option>
                    </select>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input input type="password" id="register-password" name="register-password" v-model="registerPassword"  class="form-control" required/>
                      <label class="form-label" for="register-password">Password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="termsofservice" id="termsofservice" required />
                    <label class="form-check-label" for="termsofservice">
                      I agree all statements in <nuxt-link to="/termsofservice">Terms of service</nuxt-link>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input type="submit" name="submit" value="Register" class="btn btn-primary btn-lg"/>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="/img/logo.png"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

