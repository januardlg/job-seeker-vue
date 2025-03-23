<template>
  <div class="mt-20 w-full">
    <p class="text-2xl font-medium">Login</p>
    <p class="mt-2">
      Dont't have an account ?
      <span>
        <router-link :to="registerLink" class="text-blue-600"> Create account </router-link></span
      >
    </p>
    <div class="mt-4">
      <TheInputVue
        name="Email"
        placeholder="Email"
        v-model="inputAccount.email"
        type="email"
      ></TheInputVue>

      <TheInputPasswordVue
        name="Password"
        placeholder="Password"
        v-model="inputAccount.password"
      ></TheInputPasswordVue>
      <div class="flex w-full mt-6">
        <TheButtonVue
          :variant="isEnableSubmit ? 'primary' : 'disabled'"
          :style="{ width: '100%' }"
          icon="bi-arrow-right-short"
          >Sign In</TheButtonVue
        >
      </div>
    </div>
  </div>
</template>

<script>
import TheInputVue from '@/components/input/TheInput.vue'
import TheInputPasswordVue from '@/components/input/TheInputPassword.vue'
import TheButtonVue from '@/components/button/TheButton.vue'
export default {
  components: { TheInputVue, TheInputPasswordVue, TheButtonVue },
  data() {
    return {
      inputAccount: {
        email: undefined,
        password: undefined,
        isEnableSubmit: false,
      },
    }
  },
  computed: {
    registerLink() {
      return {
        name: 'auth-register',
      }
    },
    isEnableSubmit() {
      let isEnable = false

      if (
        this.inputAccount.email &&
        this.inputAccount.email !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email) &&
        this.inputAccount.password &&
        this.inputAccount.password !== ''
      ) {
        isEnable = true
      }

      return isEnable
    },
  },
}
</script>