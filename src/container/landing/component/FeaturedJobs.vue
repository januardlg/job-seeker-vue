<template>
  <div class="container-custom w-full py-[100px] border-t border-[#F1F2F4]">
    <div class="flex justify-between items-center">
      <p class="title-section">Featured job</p>
      <TheButtonVue variant="outline">View All</TheButtonVue>
    </div>
    <div class="mt-[50px]">
      <div class="grid grid-cols-3 gap-6">
        <JobCardVue></JobCardVue>
        <JobCardVue></JobCardVue>
        <JobCardVue></JobCardVue>
        <JobCardVue></JobCardVue>
      </div>
    </div>
  </div>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
import JobCardVue from '@/components/cards/JobCard.vue'
export default {
  components: { TheButtonVue, JobCardVue },
}
</script>