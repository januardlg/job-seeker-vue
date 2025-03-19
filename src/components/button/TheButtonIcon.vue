<template>
  <div
    :class="[
      isThisHovered ? 'bg-[#0A65CC]' : 'bg-[#E7F0FA]',
      'h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer',
    ]"
    @mouseenter="handleMouseEnterCategory"
    @mouseleave="handleMouseEnterCategory"
    @click="handleClickButton"
  >
    <v-icon :name="icon" class="icon" :color="isThisHovered ? '#FFF' : '#0A65CC'" scale="1.2" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  emits: ['on-click-button'],
  data() {
    return {
      isThisHovered: false,
    }
  },
  methods: {
    handleMouseEnterCategory() {
      this.isThisHovered = !this.isThisHovered
    },
    handleClickButton() {
      this.$emit('on-click-button')
    },
  },
}
</script>