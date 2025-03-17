<template>
  <button :class="[variantButton, 'rounded-sm px-6 py-3 font-semibold cursor-pointer']">
    <div class="flex justify-between items-center space-x-3">
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
  },
  data() {},
  computed: {
    variantButton() {
      if (this.variant === 'primary') {
        return 'bg-[#0A65CC] text-white'
      } else if (this.variant === 'primary-white') {
        return 'bg-white text-[#0A65CC]'
      } else if (this.variant === 'outline') {
        return 'bg-white text-[#0A65CC] border border-[#0A65CC]'
      }
    },
  },
}
</script>