<script lang="ts">

definePageMeta({
  middleware: ["require-logout"]
})

export default defineComponent({

  
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    }
  },
  methods: {
    onLoginSubmit() {
      $fetch("/api/auth/login", {
        method: "POST",
        body: {
          email: this.loginEmail,
          password: this.loginPassword,
        }
      })
        .then(() => window.location.href = "/")
        .catch((e) => alert(e))
    }

  },
})
</script>


<template>
<section class="vh-100">
  <div class="container py-1 h-100">
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="/img/login_splashpage.jpg"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form  @submit.prevent="onLoginSubmit">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0"><img alt="" src="/img/favicon-32x32.png"></span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="login-email" name="login-email" v-model="loginEmail" required class="form-control form-control-lg" />
                    <label class="form-label" for="login-email">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="login-password" name="login-password" v-model="loginPassword" required class="form-control form-control-lg" />
                    <label class="form-label" for="login-password">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit" name="submit" value="Login" >Login</button>
                  </div>

                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <nuxt-link to="/register">Register here</nuxt-link></p>
                  <nuxt-link to="/termsofservice">Terms of service.</nuxt-link>
                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

