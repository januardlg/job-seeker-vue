<template>
  <router-link :to="jobDetailLink" @click="handleClickCard">
    <div
      :class="[
        isRemote ? 'bg-linear-[90deg,#FFF6E6_0%,#FFF_100%] cursor-pointer' : 'bg-white',
        'base-card',
      ]"
    >
      <p class="text-lg font-medium truncate">{{ jobTitle }}</p>
      <div class="flex space-x-2 items-center mt-1.5">
        <div class="py-1 px-2 bg-[#E7F6EA] rounded-[3px]">
          <p class="text-[12px] font-semibold text-[#0BA02C] uppercase">
            {{ isRemote ? 'Remote' : 'On Site' }}
          </p>
        </div>
        <div class="text-sm text-[#767F8C]">{{ getIntervalDate }}</div>
      </div>
      <div class="mt-5 flex justify-between items-center space-x-3">
        <CompanyNameInCardVue
          :company-name="companyName"
          :location="location"
        ></CompanyNameInCardVue>
        <v-icon name="bi-bookmark" class="icon cursor-pointer" color="#C8CCD1" scale="1.5" />
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex'

import CompanyNameInCardVue from './CompanyNameInCard.vue'
export default {
  components: { CompanyNameInCardVue },
  props: {
    id: {
      type: String,
      required: true,
      default: 'Id',
    },
    isRecomended: {
      type: Boolean,
    },
    jobTitle: {
      type: String,
      required: true,
      default: 'Job Title',
    },
    companyName: {
      type: String,
      required: true,
      default: 'New Company',
    },
    location: {
      type: String,
      required: true,
      default: 'New York, USA',
    },
    createdAt: {
      type: Date,
      required: true,
      default: '10 days ago',
    },
    isRemote: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    getIntervalDate() {
      const now = Date.now()
      const diffInSeconds = Math.floor(now / 1000) - this.createdAt

      if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
      if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
      if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`

      return `${Math.floor(diffInSeconds / 31536000)} years ago`
      // return new Date(this.createdAt * 1000).toLocaleString()
    },
    jobDetailLink() {
      return '/job/detail/' + this.id
    },
  },
  methods: {
    ...mapActions('jobs', ['handleSetOpenedJobDetail']),
    handleClickCard() {
      console.log('Click Detail ')
      this.handleSetOpenedJobDetail({
        slug: this.id,
        companyName: this.companyName,
        title: this.jobTitle,
        description: '<div></div>',
        remote: this.isRemote,
        location: this.location,
        createdAt: this.createdAt,
      })
    },
  },
}
</script>