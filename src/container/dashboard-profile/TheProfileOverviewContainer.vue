<template>
  <div class="">
    <div class="space-y-1">
      <p class="font-semibold text-xl">Hello {{ detailUser && detailUser?.fullName }}</p>
      <p>This is your daily activities and job alert</p>
    </div>
    <div class="grid grid-cols-3 gap-6 mt-8">
      <the-info-item-overview-vue
        v-for="item in listItem"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :value="item.value"
        :color="item.color"
      ></the-info-item-overview-vue>
    </div>
    <div class="my-4 flex justify-between items-center">
      <p class="mt-8 font-semibold text-xl">Recently Added</p>
      <div class="flex items-center space-x-1 text-[#5e6670]">
        <p>View All</p>
      </div>
    </div>
    <div>
      <the-applied-table-vue></the-applied-table-vue>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheAppliedTableVue from './components/TheOverviewComponent/TheAppliedTable.vue'
import TheInfoItemOverviewVue from './components/TheOverviewComponent/TheInfoItemOverview.vue'
export default {
  components: { TheInfoItemOverviewVue, TheAppliedTableVue },
  data() {
    return {
      listItem: [
        {
          icon: 'fa-suitcase',
          label: 'Applied Job',
          value: '123',
          color: '#e7f0fa',
        },

        {
          icon: 'bi-bookmark',
          label: 'Favorite Job',
          value: '200',
          color: '#fff6e6',
        },
        {
          icon: 'fa-suitcase',
          label: 'Job Alerts',
          value: '90',
          color: '#e7f6ea',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('auth', ['detailUser']),
  },
}
</script>