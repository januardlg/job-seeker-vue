<template>
  <div class="mb-6 text-2xl">
    <p class="font-medium">
      Applied Jobs <span class="text-gray-400">({{ getAllAppliedJobs.length }})</span>
    </p>
  </div>

  <the-applied-table-vue :listAppliedJob="getAllAppliedJobs"></the-applied-table-vue>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheAppliedTableVue from './components/TheOverviewComponent/TheAppliedTable.vue'
export default {
  components: { TheAppliedTableVue },
  computed: {
    ...mapGetters('jobs', ['recentlyAppliedJobs', 'getAllAppliedJobs']),
  },
  methods: {
    ...mapActions('jobs', ['handleFetchAppliedJobs']),
  },
  created() {
    this.handleFetchAppliedJobs()
  },
}
</script>