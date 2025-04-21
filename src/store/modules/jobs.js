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
    },
  },
  getters: {
    relatedJobsList(state) {
      return state.relatedJobs
    },
    filterOptions(state) {
      return state.filterJob
    },
  },
}
