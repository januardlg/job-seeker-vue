<template>
  <div class="p-6 flex items-center space-x-4">
    <div class="p-4 bg-[#E7F0FA] rounded-lg">
      <v-icon name="fa-suitcase" class="icon" color="#0A65CC" scale="1.5" />
    </div>
    <div>
      <p class="text-[18px] font-medium">{{ label }}</p>
      <p class="text-[#767F8C] text-sm font-normal">{{ getRenderNumber(value) }} Open Positions</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
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