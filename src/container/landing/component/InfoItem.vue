<template>
  <div class="flex p-5 items-center space-x-5 bg-white rounded-lg">
    <div class="flex items-center bg-[#E7F0FA] justify-center p-4 rounded-sm">
      <v-icon :name="icon" class="icon" color="#0A65CC" scale="2" />
    </div>
    <div>
      <p class="text-2xl font-medium">{{ getNumber }}</p>
      <p class="text-[#767F8C]">{{ label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    getNumber() {
      const formated = new Intl.NumberFormat().format(this.value)
      return formated
    },
  },
}
</script>