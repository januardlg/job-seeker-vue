<template>
  <div class="grid grid-cols-3 gap-6">
    <job-card
      v-for="job in listJobDatas"
      :key="job.slug"
      :id="job.slug"
      :jobTitle="job.title"
      :company-name="job.company_name"
      :location="job.location"
      :created_at="job.created_at"
      :is-remote="job.remote"
    ></job-card>
  </div>
</template>

<script>
// import JobCardVue from '@/components/cards/JobCard.vue'
import JobCard from '@/components/cards/JobCard.vue'

export default {
  components: { JobCard },
  data() {
    return {
      listJobDatas: [],
    }
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await fetch('https://www.arbeitnow.com/api/job-board-api', {
          method: 'GET',
        })
        // const response = await fetch('https://remotive.com/api/remote-jobs')
        const data = await response.json()
        this.listJobDatas = data.data
        console.log('Data', data)
      } catch (error) {
        console.log('FAILED TO FETCH', error)
      }
      //   console.log('FETCH')
    },
  },
  mounted() {
    this.fetchJobs()
  },
}
</script>