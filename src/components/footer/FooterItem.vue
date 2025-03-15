<template>
  <div
    @mouseenter="onHoverItem"
    @mouseleave="onHoverItem"
    class="flex items-center h-9 cursor-pointer"
  >
    <div v-if="isHovered">
      <v-icon name="bi-arrow-right-short" class="icon" scale="1.8" color="#FFF" />
    </div>
    <p :class="[isHovered ? 'text-white' : 'text-[#9199A3]', 'font-medium']">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    }
  },
  methods: {
    onHoverItem() {
      this.isHovered = !this.isHovered
    },
  },
}
</script>