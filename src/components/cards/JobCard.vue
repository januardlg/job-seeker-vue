<template>
  <div :class="[isRecomended ? 'bg-linear-[90deg,#FFF6E6_0%,#FFF_100%]' : 'bg-white', 'base-card']">
    <p class="text-lg font-medium">Junior Graphic Designer</p>
    <div class="flex space-x-2 items-center mt-1.5">
      <div class="py-1 px-2 bg-[#E7F6EA] rounded-[3px]">
        <p class="text-[12px] font-semibold text-[#0BA02C] uppercase">Level Name</p>
      </div>
      <div class="text-sm text-[#767F8C]">10 days Ago</div>
    </div>
    <div class="mt-5 flex justify-between items-center space-x-3">
      <CompanyNameInCardVue
        company-name="New Company"
        location="New York, USA"
      ></CompanyNameInCardVue>
      <v-icon name="bi-bookmark" class="icon cursor-pointer" color="#C8CCD1" scale="1.5" />
    </div>
  </div>
</template>

<script>
import CompanyNameInCardVue from './CompanyNameInCard.vue'
export default {
  components: { CompanyNameInCardVue },
  props: {
    isRecomended: {
      type: Boolean,
    },
  },
}
</script>