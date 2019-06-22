<template>
  <modal 
    title="Registration" 
    @close="modalClose"
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">

        <!-- Email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if='!$v.email.required'> Fild is required </p>
          <p class="errorText" v-if='!$v.email.email'> Email is not correct! </p>
          <input 
            v-model='email'
            :class='{error: $v.email.$error}'
            @change='$v.email.$touch()'
          >
        </div>

        <!-- Password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Password is required.</p>
          <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</p>
          <input 
            v-model='password'
            :class='{error: $v.password.$error}'
            @change='$v.password.$touch()'
          >
        </div>

        <!-- PasswordRepeat -->
        <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
          <label>Repeat password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
          <input 
            v-model='repeatPassword'
            :class='{error: $v.repeatPassword.$error}'
            @change='$v.repeatPassword.$touch()'
          >
        </div>

        <!-- Button -->
        <button class="btn btnPrimary">Summary</button> 
        <span 
          class='toLogin'
          @click="modalClose(); $emit('toggleModal');">I have an account</span>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import modal from "@/components/UI/Modal.vue";
export default {
  components: { modal },
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)

        // DONE
        this.email = ''
        this.password = ''
        this.repeatPassword = ''
        this.$v.$reset()
        this.$emit('close')
      }
    },
    modalClose () {
      this.email = ''
      this.password = ''
      this.repeatPassword = ''
      this.$v.$reset()
      this.$emit('close')
    }
  }
};
</script>
