<template>
  <dialog id="my_modal_1" :class="[isOpenModal ? 'modal modal-open' : '']">
    <div :class="[textColor, 'flex justify-center bg-white text-center rounded-md px-32 py-10']">
      <div class="">
        <p class="text-2xl font-bold capitalize">{{ modalContent.variant }}</p>
        <v-icon :name="iconModal" class="icon mt-6" scale="5" :color="textColor" />

        <p class="py-4 text-lg">{{ modalContent.description }}</p>
        <div class="flex justify-center mt-6">
          <TheButtonVue @click="handleCloseModal">OK</TheButtonVue>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TheButtonVue from '../button/TheButton.vue'
export default {
  components: { TheButtonVue },
  computed: {
    ...mapState('modal', ['isOpenModal', 'modalContent']),
    iconModal() {
      let icon

      if (this.modalContent.variant === 'success') {
        icon = 'md-checkcircle-round'
      } else if (this.modalContent.variant === 'error') {
        icon = 'md-error'
      }

      return icon
    },
    textColor() {
      let color
      if (this.modalContent.variant === 'success') {
        color = 'text-green-400'
      } else if (this.modalContent.variant === 'error') {
        color = ' text-red-400'
      }

      return color
    },
  },
  methods: {
    ...mapActions('modal', ['handleSetIsOpenModal']),
    handleCloseModal() {
      this.handleSetIsOpenModal(false)
    },
  },
}
</script>