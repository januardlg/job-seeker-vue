<template>
  <div class="mb-6 text-2xl">
    <p class="font-medium">Applied Jobs <span class="text-gray-400">(6)</span></p>
  </div>

  <the-applied-table-vue></the-applied-table-vue>
</template>

<script>
import TheAppliedTableVue from './components/TheOverviewComponent/TheAppliedTable.vue'
export default {
  components: { TheAppliedTableVue },
}
</script>