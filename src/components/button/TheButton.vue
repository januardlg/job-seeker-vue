<template>
  <button :class="[variantButton, 'rounded-sm px-6 py-3 font-semibold cursor-pointer']">
    <slot></slot>
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
  },
  data() {},
  computed: {
    variantButton() {
      if (this.variant === 'primary') {
        return 'bg-[#0A65CC] text-white'
      } else if (this.variant === 'outline') {
        return 'bg-white text-[#0A65CC] border border-[#0A65CC]'
      }
    },
  },
}
</script>