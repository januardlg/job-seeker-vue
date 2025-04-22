<template>
  <dialog id="my_modal_1" :class="[isOpenCustomModal ? 'modal modal-open' : '']">
    <div :class="['flex  bg-white rounded-md px-6 py-8']">
      <div class="">
        <slot></slot>
        <div class="mt-2">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('modal', ['customModal']),
    isOpenCustomModal() {
      return this.customModal.isOpenModal
    },
  },
  methods: {
    ...mapActions('modal', ['handleSetIsOpenCustomModal']),
    handleCloseCustomModal() {
      this.handleSetIsOpenCustomModal(false)
    },
  },
}
</script>

