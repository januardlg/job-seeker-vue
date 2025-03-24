<template>
  <div class="mt-20 w-full">
    <p class="text-2xl font-medium">Create Account</p>
    <p class="mt-2">
      Already have an account ?
      <span> <router-link :to="loginLink" class="text-blue-600"> Sign in </router-link></span>
    </p>
    <div class="mt-4">
      <TheRoleInputVue></TheRoleInputVue>
      <div class="flex space-x-2">
        <TheInputVue name="Full Name" placeholder="Full Name" v-model="fullName"></TheInputVue>
        <TheInputVue name="Username" placeholder="Username" v-model="username"></TheInputVue>
      </div>
      <TheInputVue name="Email" placeholder="Email" v-model="email" type="email"></TheInputVue>

      <TheInputPasswordVue
        name="Password"
        placeholder="Password"
        v-model="password"
      ></TheInputPasswordVue>
      <TheInputPasswordVue
        name="Confirm Password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
        :errorConfirmation="this.password !== this.confirmPassword"
      ></TheInputPasswordVue>

      <div class="flex space-x-2 items-center mt-4">
        <input id="termAndCondition" type="checkbox" v-model="agreeTnC" />
        <label for="termAndCondition">I've read and agree your term and condition</label>
      </div>

      <div class="flex w-full mt-6">
        <TheButtonVue
          :variant="isEnableSubmit ? 'primary' : 'disabled'"
          :style="{ width: '100%' }"
          icon="bi-arrow-right-short"
          @on-click-button="handleSubmitRegister"
          >Create Account</TheButtonVue
        >
      </div>
    </div>
  </div>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
import TheInputVue from '@/components/input/TheInput.vue'
import TheInputPasswordVue from '@/components/input/TheInputPassword.vue'
import TheRoleInputVue from './components/TheRoleInput.vue'
export default {
  components: { TheButtonVue, TheInputVue, TheInputPasswordVue, TheRoleInputVue },
  data() {
    return {
      fullName: 'januard',
      username: 'januardlg',
      email: 'usdercandidate1@mail.com',
      password: 'password',
      confirmPassword: 'password',
      agreeTnC: false,
      isEnableSubmit: false,
    }
  },
  computed: {
    loginLink() {
      return {
        name: 'auth-login',
        // params: { teamId: this.id },
        // query: { sort: 'asc' },
      }
    },
    iconPasswordInput() {
      if (this.isPasswordShow) {
        return 'fa-regular-eye'
      } else {
        return 'fa-regular-eye-slash'
      }
    },
    iconConfirmPasswordInput() {
      if (this.isConfirmPasswordShow) {
        return 'fa-regular-eye'
      } else {
        return 'fa-regular-eye-slash'
      }
    },
    isEnableSubmit() {
      let isEnable = false

      if (
        this.fullName &&
        this.fullName !== '' &&
        this.username &&
        this.username !== '' &&
        this.email &&
        this.email !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email) &&
        this.password &&
        this.password !== '' &&
        this.confirmPassword &&
        this.confirmPassword !== '' &&
        this.password === this.confirmPassword &&
        this.agreeTnC === true
      ) {
        isEnable = true
      } else {
        isEnable = false
      }

      return isEnable
    },
  },
  watch: {},
  methods: {
    handleSubmitRegister() {
      this.$store.dispatch('auth/register', {
        fullName: this.fullName,
        username: this.username,
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
