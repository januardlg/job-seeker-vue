<template>
  <div
    :class="[
      isThisHovered ? 'shadow-[0_12px_48px_0_rgba(0,44,109,0.10)]' : 'shadow-none bg-white',
      'p-6 flex items-center space-x-4 rounded-xl',
    ]"
    @mouseenter="handleMouseEnterCategory"
    @mouseleave="handleMouseLeaveCategory"
  >
    <div :class="[isThisHovered ? 'bg-[#0A65CC]' : 'bg-[#E7F0FA]', 'p-4  rounded-lg']">
      <v-icon :name="icon" class="icon" :color="isThisHovered ? '#FFF' : '#0A65CC'" scale="1.5" />
    </div>
    <!-- box-shadow: 0px 12px 48px 0px rgba(0, 44, 109, 0.10); -->
    <div>
      <p :class="[isThisHovered ? 'text-[#0A65CC]' : 'text-black', 'text-[18px] font-medium']">
        {{ label }}
      </p>
      <p class="text-[#767F8C] text-sm font-normal">{{ getRenderNumber(value) }} Open Positions</p>
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
    hoveredCategory: {
      type: String,
    },
  },
  emits: ['on-hover-category'],
  methods: {
    getRenderNumber(total) {
      const formated = new Intl.NumberFormat().format(total)
      return formated
    },
    handleMouseEnterCategory() {
      this.$emit('on-hover-category', this.label)
    },
    handleMouseLeaveCategory() {
      this.$emit('on-hover-category', '')
    },
  },
  computed: {
    isThisHovered() {
      return this.hoveredCategory === this.label
    },
  },
}
</script>