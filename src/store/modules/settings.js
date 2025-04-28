import api from '@/service/api'

export default {
  namespaced: true,
  state() {
    return {
      profileDetail: undefined,
    }
  },
  mutations: {
    setProfileDetail(state, payload) {
      state.profileDetail = payload
    },
  },
  actions: {
    async fetchProfileDetail(context, payload) {
      const userId = context.rootState.auth.credentialSignIn.userId

      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })

      try {
        const response = await api.get(`/usersCandidate/${userId}.json`)
        if (response.status === 200) {
          console.log('respose', response)
          context.commit('setProfileDetail', response.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },

    async onSubmitSaveChanges(context, payload) {
      const data = {
        ...payload,
      }

      console.log({ data })
    },
  },
  getters: {
    allProfileDetail(state) {
      return state.profileDetail
    },
  },
}
