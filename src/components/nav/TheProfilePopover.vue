<template>
  <div style="anchor-name: --anchor-1" class="cursor-pointer" @click="handleOpenDropdownProfile">
    <v-icon name="ri-account-circle-fill" class="icon" color="#0A65CC" scale="2" />
  </div>
  <ul
    :class="{
      'dropdown dropdown-open dropdown-end menu rounded-sm bg-base-100 shadow-sm  shadow-[#0A65CC] hover:bg-none active:bg-none':
        isOpenDropdownProfile,
    }"
    popover
    id="popover-1"
    style="position-anchor: --anchor-1"
  >
    <li class="h-20">
      <div class="w-full bg-white flex items-center space-x-2 cursor-default">
        <v-icon name="ri-account-circle-fill" class="icon" color="#0A65CC" scale="2.5" />
        <div>
          <p class="text-lg font-medium">{{ detailUser && detailUser?.fullName }}</p>
          <p class="capitalize">{{ detailUser && detailUser?.role }}</p>
        </div>
      </div>
    </li>
    <li class="h-8">
      <div class="w-full h-full relative bg-white flex justify-center cursor-default">
        <div
          class="absolute bottom-0 py-2 w-full hover:bg-gray-300 cursor-pointer text-center"
          @click="handleLogout"
        >
          <p>Sign Out</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isOpenDropdownProfile: false,
    }
  },
  computed: {
    ...mapGetters('auth', ['detailUser']),
  },
  methods: {
    handleOpenDropdownProfile() {
      this.isOpenDropdownProfile = !this.isOpenDropdownProfile
    },
    handleLogout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style scoped>
</style>