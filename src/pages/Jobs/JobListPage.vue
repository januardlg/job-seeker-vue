<template>
  <the-breadcrumb-vue></the-breadcrumb-vue>
  <div class="bg-white">
    <div class="pt-8 pb-8 sticky top-[202px] bg-white z-10 container-custom">
      <div
        class="rounded-lg shadow-[0_8px_24px_0_rgba(0,44,109,0.04)] border border-[#E4E5E8] grid grid-cols-4"
      >
        <div class="input-container col-span-2 border-r border-[#E4E5E8]">
          <v-icon name="bi-search" class="icon" color="#0066FF" scale="1" />
          <input
            placeholder="Job tittle, keyword, company"
            class="focus:outline-none w-full truncate ml-3"
            v-model="searchInput"
          />
        </div>
        <div class="input-container">
          <v-icon name="co-location-pin" class="icon" color="#0066FF" scale="1.3" />
          <input
            placeholder="Your Location"
            class="focus:outline-none w-full ml-3"
            v-model="locationInput"
          />
        </div>
        <div class="flex justify-end p-1.5 space-x-3">
          <div>
            <div class="drawer">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" />
              <label for="my-drawer" class="">
                <span>
                  <div
                    class="flex justify-between items-center space-x-3 rounded-sm px-6 py-3 font-semibold cursor-pointer bg-[#F1F2F4]"
                  >
                    <v-icon name="gi-settings-knobs" class="icon" scale="1.5" color="#000000" />
                    <p>Filters</p>
                  </div>
                </span>
              </label>
              <div class="drawer-side z-[100]">
                <the-filter-drawer></the-filter-drawer>
              </div>
            </div>
          </div>

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
import { mapActions } from 'vuex'
import TheBreadcrumbVue from '@/components/breadcrumb/TheBreadcrumb.vue'
import TheButtonVue from '@/components/button/TheButton.vue'
import TheJobsListVue from '@/container/jobs/jobs-list/TheJobsList.vue'
import TheFilterDrawerVue from '@/container/jobs/jobs-list/components/TheFilterDrawer.vue'
import TheFilterDrawer from '@/container/jobs/jobs-list/components/TheFilterDrawer.vue'

export default {
  components: { TheBreadcrumbVue, TheButtonVue, TheJobsListVue, TheFilterDrawer },
  data() {
    return {
      searchInput: '',
      locationInput: '',
    }
  },
  watch: {
    // searchInput() {
    //   console.log('searchInput', this.searchInput)
    // },
  },
  methods: {
    onClickButtonSearch() {
      this.handleSearchByFilter({
        searchInput: this.searchInput,
        locationInput: this.locationInput,
      })
    },
    ...mapActions('jobs', ['handleSearchByFilter']),
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