<template>
  <div class="container-custom w-full bg-white py-[100px]">
    <p class="title-section mb-[50px]">Most Popular Vacancies</p>
    <div class="grid grid-cols-4 gap-x-6 gap-y-8">
      <div v-for="vacancy in listPopularVacancies" :key="vacancy.vacancy">
        <p class="text-[18px] font-medium">{{ vacancy.vacancy }}</p>
        <p class="text-[#767F8C] text-sm font-normal">
          {{ getRenderNumber(vacancy.total) }} Open Positions
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listPopularVacancies: {
      type: Array,
      required: true,
    },
  },
  computed: {
    getNumber() {
      const formated = new Intl.NumberFormat().format(this.value)
      return formated
    },
  },
  methods: {
    getRenderNumber(total) {
      const formated = new Intl.NumberFormat().format(total)
      return formated
    },
  },
}
</script>