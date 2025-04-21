<template>
  <div class="grid grid-cols-3 gap-6">
    <job-card
      v-for="job in listJobDatas"
      :key="job.slug"
      :id="job.slug"
      :jobTitle="job.title"
      :company-name="job.company_name"
      :location="job.location"
      :createdAt="job.created_at"
      :is-remote="job.remote"
    ></job-card>
  </div>

  <div class="flex justify-center mt-12">
    <div class="flex space-x-4">
      <input
        class="join-item btn btn-circle"
        type="radio"
        name="options"
        aria-label="1"
        checked="checked"
        value="1"
        v-model="page"
      />
      <input
        class="join-item btn btn-circle"
        type="radio"
        name="options"
        aria-label="2"
        value="2"
        v-model="page"
      />
      <input
        class="join-item btn btn-circle"
        type="radio"
        name="options"
        aria-label="3"
        value="3"
        v-model="page"
      />
      <input
        class="join-item btn btn-circle"
        type="radio"
        name="options"
        aria-label="4"
        value="4"
        v-model="page"
      />
    </div>
  </div>
</template>

<script>
// import JobCardVue from '@/components/cards/JobCard.vue'
import JobCard from '@/components/cards/JobCard.vue'
import { mapState } from 'vuex'

export default {
  components: { JobCard },
  data() {
    return {
      listJobDatas: [],
      page: 1,
    }
  },
  methods: {
    async fetchJobs() {
      this.$store.dispatch('handleSetIsLoadingOverlay', true)

      try {
        let queryFilter = {}

        if (this.searchByInput.searchText) {
          queryFilter.search = this.searchByInput.searchText
        }
        if (this.searchByInput.locationText) {
          queryFilter.location = this.searchByInput.locationText
        }
        if (this.filterJob.jobType) {
          queryFilter.jobType = this.filterJob.jobType
        }

        const response = await fetch(
          'https://www.arbeitnow.com/api/job-board-api?' +
            new URLSearchParams({
              ...queryFilter,
              page: this.page,
            }).toString(),
          {
            method: 'GET',
          }
        )
        const data = await response.json()
        this.listJobDatas = data.data
      } catch (error) {
        console.log('FAILED TO FETCH', error)
      } finally {
        this.$store.dispatch('handleSetIsLoadingOverlay', false)
      }
      //   console.log('FETCH')
    },
  },
  computed: { ...mapState('jobs', ['filterJob', 'searchByInput']) },
  watch: {
    filterJob: {
      immediate: true, // Fetch data when component is created
      deep: true,
      handler(newValue) {
        this.fetchJobs()
      },
    },
    searchByInput: {
      immediate: true, // Fetch data when component is created
      deep: true,
      handler(newValue) {
        this.fetchJobs()
      },
    },
    page() {
      this.fetchJobs()
    },
  },
  mounted() {
    this.fetchJobs()
  },
}
</script>