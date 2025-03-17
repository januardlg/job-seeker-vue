<template>
  <div
    class="p-6 text-center bg-[#F1F2F4] group hover:bg-white rounded-xl"
    @mouseenter="$emit('handle-hover-step', title)"
    @mouseleave="$emit('handle-hover-step', '')"
  >
    <div class="flex justify-center">
      <div
        :class="[
          activeStep == title ? 'bg-[#0A65CC]' : 'bg-white',
          'p-5 rounded-full h-20 w-20 flex justify-center items-center',
        ]"
      >
        <v-icon
          :name="icon"
          class="icon"
          :color="activeStep == title ? '#FFF' : '#0A65CC'"
          scale="2"
        />
      </div>
    </div>
    <p class="mt-6 text-lg font-medium">{{ title }}</p>
    <p class="mt-3 text-[#767F8C] text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    activeStep: {
      type: String,
    },
  },
  emits: ['handle-hover-step'],
}
</script>