<template>
  <div class="container-custom w-full bg-[#F1F2F4] py-[100px]">
    <div class="grid grid-cols-2 items-center">
      <div class="space-y-6">
        <div>
          <p class="text-[56px]/14">
            Find a job that suits <br />
            your interest & skills.
          </p>
          <p class="mt-6 text-[#5E6670] text-lg">
            Some life is ugly in the diam of the valley at the ends of the laughter. <br />
            No one is in the scelerisque lion, he wants to be a bestiary.
          </p>
        </div>
        <div class="mt-8 p-4 bg-white rounded-lg flex justify-between space-x-3">
          <div :class="inputClass">
            <v-icon name="bi-search" class="icon" color="#0066FF" scale="1" />
            <input
              placeholder="Job tittle, keyword, company"
              class="focus:outline-none w-full truncate"
            />
          </div>
          <div class="border-r border-[#F1F2F4] py-3" />
          <div :class="inputClass">
            <v-icon name="co-location-pin" class="icon" color="#0066FF" scale="1.3" />
            <input placeholder="Your Location" class="focus:outline-none w-full" />
          </div>
          <TheButtonVue variant="primary">Find Job</TheButtonVue>
        </div>
        <div class="text-[#9199A3]">
          <p>Suggestion : Designer, Programming, Video, Animation</p>
        </div>
      </div>

      <div class="flex justify-end">
        <img :src="landingIlustration" alt="landing-ilustration" />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6 mt-[100px]">
      <InfoItemVue
        v-for="item in listItem"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :value="item.value"
      ></InfoItemVue>
    </div>
  </div>
</template>

<script>
import LandingIlustration from '../../../assets/image/landing-ilustration.png'
import TheButtonVue from '@/components/button/TheButton.vue'
import InfoItemVue from './InfoItem.vue'

export default {
  components: { TheButtonVue, InfoItemVue },
  props: {
    listItem: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      landingIlustration: LandingIlustration,
    }
  },
  computed: {
    inputClass() {
      return 'flex items-center py-1 space-x-3'
    },
  },
}
</script>