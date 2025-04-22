export default {
  namespaced: true,
  state() {
    return {
      modalContent: {
        isOpenModal: false,
        variant: 'error',
        description: 'Modal description',
      },
      customModal: {
        isOpenModal: false,
      },
    }
  },
  mutations: {
    setIsOpenModal(state, payload) {
      state.modalContent.isOpenModal = payload
    },
    setModalContent(state, payload) {
      state.modalContent.isOpenModal = payload.isOpenModal
      state.modalContent.variant = payload.variant
      state.modalContent.description = payload.description
    },
    setIsOpenCustomModal(state, payload) {
      state.customModal.isOpenModal = payload
    },
  },
  actions: {
    handleSetIsOpenModal(context, payload) {
      context.commit('setIsOpenModal', payload)
    },
    handleSetIsOpenCustomModal(context, payload) {
      context.commit('setIsOpenCustomModal', payload)
    },
    handleSetModalContent(context, payload) {
      context.commit('setModalContent', payload)
    },
  },
}
