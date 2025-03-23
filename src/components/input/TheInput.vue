<template>
  <div class="w-full h-[70px]">
    <input class="input-vue" :placeholder="placeholder" :value="modelValue" @input="handleInput" />
    <p v-if="modelValue == ''" class="text-[12px] text-red-500 mt-[2px]">
      *{{ name }} cannot be empty
    </p>

    <p
      v-else-if="
        type === 'email' &&
        modelValue &&
        modelValue !== '' &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(modelValue)
      "
      class="text-[12px] text-red-500 mt-[2px]"
    >
      *{{ name }} must be filled using email format
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: 'text',
    },
  },
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    },
  },
}
</script>