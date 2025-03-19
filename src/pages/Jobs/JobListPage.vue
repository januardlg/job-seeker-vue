<template>
  <the-breadcrumb-vue></the-breadcrumb-vue>
  <div class="bg-white">
    <div class="pt-8 pb-8 sticky top-[202px] bg-white z-50 container-custom">
      <div
        class="rounded-lg shadow-[0_8px_24px_0_rgba(0,44,109,0.04)] border border-[#E4E5E8] grid grid-cols-4"
      >
        <div class="input-container col-span-2 border-r border-[#E4E5E8]">
          <v-icon name="bi-search" class="icon" color="#0066FF" scale="1" />
          <input
            placeholder="Job tittle, keyword, company"
            class="focus:outline-none w-full truncate ml-3"
            v-model="filterInput"
          />
        </div>
        <div class="input-container">
          <v-icon name="co-location-pin" class="icon" color="#0066FF" scale="1.3" />
          <input placeholder="Your Location" class="focus:outline-none w-full ml-3" />
        </div>
        <div class="flex justify-end p-1.5 space-x-3">
          <button class="rounded-sm px-6 py-3 font-semibold cursor-pointer bg-[#F1F2F4]">
            <div class="flex justify-between items-center space-x-3">
              <v-icon name="gi-settings-knobs" class="icon" scale="1.5" color="#000000" />
              <p>Filters</p>
            </div>
          </button>
          <TheButtonVue variant="primary" @on-click-button="onClickButtonSearch"
            >Find Job</TheButtonVue
          >
        </div>
      </div>
    </div>
    <div class="container-custom">
      <the-jobs-list-vue></the-jobs-list-vue>
    </div>
  </div>
</template>

<script>
import TheBreadcrumbVue from '@/components/breadcrumb/TheBreadcrumb.vue'
import TheButtonVue from '@/components/button/TheButton.vue'
import TheJobsListVue from '@/container/jobs/jobs-list/TheJobsList.vue'

export default {
  components: { TheBreadcrumbVue, TheButtonVue, TheJobsListVue },
  data() {
    return {
      filterInput: '',
      locationInput: '',
    }
  },
  watch: {
    // filterInput() {
    //   console.log('filterInput', this.filterInput)
    // },
  },
  methods: {
    onClickButtonSearch() {
      console.log('Search using filter', this.filterInput)
      console.log('Search using location', this.locationInput)
    },
  },
}
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  padding: 12px 12px;
}
</style>