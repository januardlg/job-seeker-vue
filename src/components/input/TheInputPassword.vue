<template>
  <div class="w-full h-[70px]">
    <div class="inputPassword">
      <input
        :placeholder="placeholder"
        :value="modelValue"
        class="text-sm focus:outline-none w-full"
        :type="isPasswordShow ? 'text' : 'password'"
        @input="handleInput"
      />
      <v-icon
        :name="iconPasswordInput"
        class="icon cursor-pointer"
        scale="1"
        color="#10182"
        @click="handleShowPassword"
      />
    </div>
    <p v-if="modelValue == ''" class="text-[12px] text-red-500 mt-[2px]">
      *{{ name }} cannot be empty
    </p>

    <p v-if="errorConfirmation" class="text-[12px] text-red-500 mt-[2px]">
      *Password must be same with confirm password
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
    errorConfirmation: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isPasswordShow: false,
    }
  },
  computed: {
    iconPasswordInput() {
      if (this.isPasswordShow) {
        return 'fa-regular-eye'
      } else {
        return 'fa-regular-eye-slash'
      }
    },
  },
  methods: {
    handleShowPassword() {
      this.isPasswordShow = !this.isPasswordShow
    },
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    },
  },
}
</script>

<style scoped>
/* flex items-center border px-4 py-2 border-[#E4E5E8] rounded-md hover:border-gray-900 */
.inputPassword {
  display: flex;
  align-items: center;
  border: 1px solid #e4e5e8;
  border-radius: 6px;
  padding: 8px 16px;
}
.inputPassword:hover {
  border-color: #101828;
}
</style>