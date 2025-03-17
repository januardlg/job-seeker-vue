<template>
  <div class="container-custom w-full pb-[100px]">
    <p class="title-section">Top companies</p>
    <div class="mt-[50px] grid grid-cols-3 gap-6">
      <CompanyCardVue></CompanyCardVue>
      <CompanyCardVue></CompanyCardVue>
      <CompanyCardVue></CompanyCardVue>
      <CompanyCardVue></CompanyCardVue>
    </div>
  </div>
</template>

<script>
import CompanyCardVue from '@/components/cards/CompanyCard.vue'
export default {
  components: {
    CompanyCardVue,
  },
}
</script>