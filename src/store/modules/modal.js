export default {
  namespaced: true,
  state() {
    return {
      isOpenModal: false,
      modalContent: {
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
      state.modalContent.variant = payload.variant
      state.modalContent.description = payload.description
    },
  },
  actions: {
    handleSetIsOpenModal(context, payload) {
      context.commit('setIsOpenModal', payload)
    },
    handleSetModalConent(context, payload) {
      context.commit('setModalContent', payload)
    },
  },
}
