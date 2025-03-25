<template>
  <div class="grid grid-cols-2">
    <div class="flex justify-center">
      <div class="w-[70%] h-full items-center justify-center relative">
        <div class="py-6 absolute top-0">
          <div class="flex items-center space-x-2">
            <v-icon name="fa-suitcase" class="icon" color="#0A65CC" scale="2" />
            <p class="text-2xl font-semibold">Jobseeker</p>
          </div>
        </div>
        <div class="h-full w-full items-center flex">
          <RouterView> </RouterView>
        </div>
      </div>
    </div>

    <div
      :class="['h-[100vh] bg-no-repeat w-100vw bg-cover relative']"
      :style="{ backgroundImage: `url(/images/auth-image.jpg)` }"
    >
      <div class="bg-black h-full w-full opacity-45"></div>
      <div class="absolute bottom-20 p-20">
        <p class="text-white font-medium text-4xl">
          Over 1,569,000 candidates <br />
          waiting for good employees.
        </p>
        <div class="flex space-x-15 mt-15">
          <div v-for="item in listItem" :key="item">
            <div class="flex items-center bg-[#E7F0FA] justify-center p-4 rounded-sm opacity-80">
              <v-icon :name="item.icon" class="icon" color="#0A65CC" scale="2" />
            </div>
            <div class="text-white mt-6 opacity-80">
              <p class="text-xl font-medium">{{ getNumber(item.value) }}</p>
              <p class="">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'

import TheHeaderVue from '../../components/nav/TheHeader.vue'
import TheFooterVue from '../../components/footer/TheFooter.vue'

import authImage from '../../../public/images/auth-image.jpg'

export default {
  components: { RouterView, TheFooterVue, TheHeaderVue },
  data() {
    return {
      authImage: authImage,
      listItem: [
        {
          icon: 'fa-suitcase',
          label: 'Live Job',
          value: '175324',
        },
        {
          icon: 'px-buildings',
          label: 'Companies',
          value: '97354',
        },
        {
          icon: 'fa-suitcase',
          label: 'New Jobs',
          value: '7532',
        },
      ],
    }
  },
  methods: {
    getNumber(value) {
      const formated = new Intl.NumberFormat().format(value)
      return formated
    },
  },
}
</script>

<style scoped>
</style>