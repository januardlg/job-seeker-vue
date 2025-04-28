import api from '@/service/api'

export default {
  namespaced: true,
  state() {
    return {
      relatedJobs: [
        {
          jobTitle: 'Developer',
        },
        {
          jobTitle: 'Developer',
        },
        {
          jobTitle: 'Developer',
        },
        {
          jobTitle: 'Developer',
        },
        {
          jobTitle: 'Developer',
        },
        {
          jobTitle: 'Developer',
        },
      ],
      filterJob: {
        jobType: null,
        industryselected: undefined,
        minSalary: undefined,
        maxSalary: undefined,
        isRemote: undefined,
      },
      searchByInput: {
        searchText: '',
        locationText: '',
      },
      openedJobDetail: {
        slug: '',
        companyName: '',
        title: '',
        description: '<div></div>',
        remote: false,
        location: '',
        createdAt: undefined,
      },
      appliedJobs: [],
    }
  },
  mutations: {
    setFilter(state, payload) {
      state.filterJob.jobType = payload.jobType
      state.filterJob.industryselected = payload.industryselected
      state.filterJob.minSalary = payload.minSalary
      state.filterJob.maxSalary = payload.maxSalary
      state.filterJob.isRemote = payload.isRemote
    },
    setSearchByInput(state, payload) {
      state.searchByInput.searchText = payload.searchInput
      state.searchByInput.locationText = payload.locationInput
    },
    setOpenedJobDetail(state, payload) {
      state.openedJobDetail.slug = payload.slug
      state.openedJobDetail.companyName = payload.companyName
      state.openedJobDetail.title = payload.title
      state.openedJobDetail.description = payload.description
      state.openedJobDetail.remote = payload.remote
      state.openedJobDetail.location = payload.location
      state.openedJobDetail.createdAt = payload.createdAt
    },
    setAppliedJobs(state, payload) {
      state.appliedJobs = payload
    },
  },
  actions: {
    handleSetFilter(context, payload) {
      context.commit('setFilter', payload)
    },
    handleSearchByFilter(context, payload) {
      context.commit('setSearchByInput', payload)
    },
    handleSetOpenedJobDetail(context, payload) {
      context.commit('setOpenedJobDetail', payload)
      localStorage.setItem('activeDetailJob', JSON.stringify(payload))
    },
    async onSubmitApply(context, payload) {
      console.log('onSubmitApply', payload)
      const userDetail = context.rootState.auth.detailUser
      const detailJob = context.state.openedJobDetail
      const dataSubmit = {
        ...detailJob,
        base64CvFile: payload.base64CV,
        coverLetterText: payload.coverLetter,
        appliedAt: new Date().toISOString(),
      }
      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })
      try {
        const response = await api.post(`/appliedJob/${userDetail.uid}.json`, dataSubmit)
        if (response) {
          context.dispatch(
            'modal/handleSetModalContent',
            {
              isOpenModal: true,
              variant: 'success',
              description: 'Success apply Job',
            },
            { root: true },
          )
          context.dispatch('modal/handleSetIsOpenCustomModal', false, { root: true })
        }
      } catch (error) {
        console.log('error,', error)
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: 'Failed to apply Job',
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },
    async handleFetchAppliedJobs(context, payload) {
      const userId = context.rootState.auth.credentialSignIn.userId

      console.log({ userId })

      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })
      try {
        const response = await api.get(`/appliedJob/${userId}.json`)
        if (response.status === 200) {
          let appliedJobArray = []

          const data = response.data
          for (const key in data) {
            const appliedData = {
              appliedIdJob: key,
              slug: data[key].slug,
              companyName: data[key].companyName,
              title: data[key].title,
              description: data[key].description,
              remote: data[key].remote,
              location: data[key].location,
              createdAt: data[key].createdAt,
              appliedAt: data[key].appliedAt,
            }

            appliedJobArray.push(appliedData)
          }

          // console.log('arr', appliedJobArray)
          context.commit('setAppliedJobs', appliedJobArray)
        }
      } catch (error) {
        console.log(error)
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: error,
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },
  },
  getters: {
    relatedJobsList(state) {
      return state.relatedJobs
    },
    filterOptions(state) {
      return state.filterJob
    },
    getAllAppliedJobs(state) {
      return state.appliedJobs
    },
    recentlyAppliedJobs(state) {
      const recently = state.appliedJobs.slice(0, 4)

      return recently
    },
  },
}
