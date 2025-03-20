import { createStore } from 'vuex'
import jobsModule from './modules/jobs'

const store = createStore({
  modules: {
    jobs: jobsModule,
  },
  state() {
    return {
      isLoadingOverlayOpen: false,
    }
  },
  mutations: {
    setIsLoadingOverLay(state, payload) {
      state.isLoadingOverlayOpen = payload
    },
  },
  actions: {
    handleSetIsLoadingOverlay(context, payload) {
      context.commit('setIsLoadingOverLay', payload)
    },
  },
  getters: {},
})

export default store
