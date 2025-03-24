<template>
  <button
    :class="[variantButton, 'rounded-sm px-6 py-3 font-semibold flex justify-center']"
    @click.prevent="handleButtonClick"
    :style="{ ...style }"
  >
    <div class="flex items-center space-x-3">
      <div>
        <slot></slot>
      </div>
      <div v-if="icon">
        <v-icon
          :name="icon"
          class="icon"
          scale="1.5"
          :color="variant === 'primary' ? '#FFF' : '#0A65CC'"
        />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary',
    },
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
    style: {
      required: false,
    },
  },
  emits: ['on-click-button'],
  data() {},
  computed: {
    variantButton() {
      if (this.variant === 'primary') {
        return 'bg-[#0A65CC] text-white cursor-pointer'
      } else if (this.variant === 'primary-white') {
        return 'bg-white text-[#0A65CC] cursor-pointer'
      } else if (this.variant === 'outline') {
        return 'bg-white text-[#0A65CC] border border-[#0A65CC] cursor-pointer'
      } else if (this.variant === 'disabled') {
        return 'bg-gray-300 text-gray200 cursor-not-allowed pointer-events-none'
      }
    },
  },
  methods: {
    handleButtonClick() {
      this.$emit('on-click-button')
    },
  },
}
</script>