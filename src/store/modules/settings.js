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
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: 'Failed Fetch Data ' + error?.response.data?.error?.message,
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },

    async onSubmitSaveChanges(context, payload) {
      const data = {
        ...payload,
        updatedAt: new Date().toISOString(),
      }
      const userId = context.rootState.auth.credentialSignIn.userId

      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })

      try {
        const response = await api.patch(`/usersCandidate/${userId}.json`, data)
        if (response.status === 200) {
          context.dispatch(
            'modal/handleSetModalContent',
            {
              isOpenModal: true,
              variant: 'success',
              description: 'Success Update Profile',
            },
            { root: true },
          )
        }
      } catch (error) {
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: 'Failed Update Profile ' + error,
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },
  },
  getters: {
    allProfileDetail(state) {
      return state.profileDetail
    },
  },
}
