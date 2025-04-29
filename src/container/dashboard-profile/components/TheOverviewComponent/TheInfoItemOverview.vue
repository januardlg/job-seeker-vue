<template>
  <div
    class="flex justify-between p-5 items-center space-x-5 rounded-lg"
    :style="{ backgroundColor: color }"
  >
    <div>
      <p class="text-2xl font-medium">{{ getNumber }}</p>
      <p class="text-[#767F8C]">{{ label }}</p>
    </div>
    <div class="flex items-center bg-white justify-center p-4 rounded-sm">
      <v-icon :name="icon" class="icon" color="#0A65CC" scale="2" />
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
    color: {
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