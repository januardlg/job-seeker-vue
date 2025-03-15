<template>
  <div class="base-card space-y-5">
    <CompanyNameInCardVue
      company-name="New Company"
      location="New York, USA"
    ></CompanyNameInCardVue>
    <div class="py-3 px-6 bg-[#E7F0FA] flex justify-center items-center">
      <p class="text-[16px] text-[#0A65CC]">Open Position (3)</p>
    </div>
  </div>
</template>

<script>
import CompanyNameInCardVue from './CompanyNameInCard.vue'
export default {
  components: { CompanyNameInCardVue },
}
</script>