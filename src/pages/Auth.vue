<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Auth page</h1>

        <!-- Login -->

        <button class="btn btnPrimary" @click='modalToggle("login")'>Login</button>
        <login @toggleModal='modalToggle("registration")' @close='auth = null' v-show='auth === "login"' />

        <!-- Registration -->

        <button class="btn btnPrimary" @click='modalToggle("registration")'>Registration</button>
        <registration @toggleModal='modalToggle("login")' @close='auth = null' v-show='auth === "registration"' />

      </div>
    </section>
  </div>
</template>

<script>
import login from '@/components/Auth/Modal/Login.vue'
import registration from '@/components/Auth/Modal/Registration.vue'
export default {
  components: { login, registration },
  data () {
    return {
      auth: null
    }
  },
  methods: {
    modalToggle (modal) {
      this.auth = modal
    }
  }
}
</script>

<style lang="scss">
.toRegistration,
.toLogin {
  margin-top: 20px;
  display: block;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
