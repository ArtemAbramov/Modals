<template>
  <modal 
    title="Login" 
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

        <!-- Button -->
        <button class="btn btnPrimary">Summary</button>
        <span 
          class='toRegistration'
          @click="modalClose(); $emit('toggleModal');">I need an account</span>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import modal from "@/components/UI/Modal.vue";
export default {
  components: { modal },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(6)
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
        this.$v.$reset()
        this.$emit('close')
      }
    },
    modalClose () {
      this.email = ''
      this.password = ''
      this.$v.$reset()
      this.$emit('close')
    }
  }
};
</script>
