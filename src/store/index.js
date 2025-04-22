import { createStore } from 'vuex'
import jobsModule from './modules/jobs'
import authModule from './modules/auth'
import modalModule from './modules/modal'

const store = createStore({
  modules: {
    jobs: jobsModule,
    auth: authModule,
    modal: modalModule,
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
