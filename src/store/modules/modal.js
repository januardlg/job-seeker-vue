export default {
  namespaced: true,
  state() {
    return {
      modalContent: {
        isOpenModal: false,
        variant: 'error',
        description: 'Modal description',
      },
    }
  },
  mutations: {
    setIsOpenModal(state, payload) {
      state.isOpenModal = payload
    },
    setModalContent(state, payload) {
      state.modalContent.isOpenModal = payload.isOpenModal
      state.modalContent.variant = payload.variant
      state.modalContent.description = payload.description
    },
  },
  actions: {
    handleSetIsOpenModal(context, payload) {
      context.commit('setIsOpenModal', payload)
    },
    handleSetModalContent(context, payload) {
      context.commit('setModalContent', payload)
    },
  },
}
