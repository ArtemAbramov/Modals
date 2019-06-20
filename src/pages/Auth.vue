<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Auth page</h1>

        <!-- Login -->

        <button class="btn btnPrimary" @click='showLogin'>Login</button>
        <login @toRegistration='showRegistration' @close='loginShow = false' v-show='loginShow' />

        <!-- Registration -->

        <button class="btn btnPrimary" @click='showRegistration'>Registration</button>
        <registration @toLogin='showLogin' @close='registrationShow = false' v-show='registrationShow' />

      </div>
    </section>
  </div>
</template>

<script>
import login from '@/components/Login.vue'
import registration from '@/components/Registration.vue'
export default {
  components: { login, registration },
  data () {
    return {
      loginShow: false,
      registrationShow: false
    }
  },
  methods: {
    showLogin () {
      this.loginShow = true
    },
    showRegistration () {
      this.registrationShow = true
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
