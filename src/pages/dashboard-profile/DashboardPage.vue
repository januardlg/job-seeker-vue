<template>
  <div class="">
    <TheHeaderVue />
  </div>
  <TheDashboardProfileVue />
</template>

<script>
import TheHeaderVue from '@/components/nav/TheHeader.vue'
import TheDashboardProfileVue from '@/container/dashboard-profile/TheDashboardProfile.vue'

export default {
  components: { TheHeaderVue, TheDashboardProfileVue },
}
</script>