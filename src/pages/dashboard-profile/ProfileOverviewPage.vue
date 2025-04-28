<template>
  <div class="h-[calc(100vh-204px)] pt-14">
    <the-profile-overview-container-vue></the-profile-overview-container-vue>
  </div>
</template>

<script>
import TheProfileOverviewContainerVue from '@/container/dashboard-profile/TheProfileOverviewContainer.vue'
export default {
  components: { TheProfileOverviewContainerVue },
}
</script>