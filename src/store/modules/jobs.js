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
  },
  actions: {
    handleSetFilter(context, payload) {
      context.commit('setFilter', payload)
    },
    handleSearchByFilter(context, payload) {
      context.commit('setSearchByInput', payload)
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
