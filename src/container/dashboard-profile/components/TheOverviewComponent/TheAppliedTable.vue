<template>
  <table class="w-full table-auto">
    <thead class="text-left bg-gray-200 h-10 font-medium">
      <tr>
        <th>JOBS</th>
        <th>DATE APPLIED</th>
        <th>STATUS</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in listAppliedJob"
        :key="item"
        class="group pl-4 border-b-[#e5e7eb] border border-white cursor-pointer rounded-md hover:bg-[#d3e8ff]"
      >
        <td>
          <div><the-applied-job-card-vue></the-applied-job-card-vue></div>
        </td>
        <td>
          <p class="text-[#5e6670]">Feb 27, 2025 20:00</p>
        </td>
        <td>
          <p class="text-green-600 font-medium">Active</p>
        </td>
        <td>
          <div class="py-3 px-4 bg-gray-200 w-fit group-hover:bg-[#0A65CC] group-hover:text-white">
            View Details
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
import TheAppliedJobCardVue from '../TheAppliedJobCard.vue'
export default {
  components: { TheButtonVue, TheAppliedJobCardVue },
  props: {
    // listAppliedJob: {
    //   type: Array,
    // },
  },
  data() {
    return {
      listAppliedJob: [0, 1, 2, 3, 5, 6, 7, 8],
    }
  },
}
</script>

<style scoped>
table thead tr th {
  font-weight: 600;
  color: #5e6670;
  padding-left: 16px;
}
table tbody tr td {
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  /* border-bottom: 1px solid red; */
}
</style>