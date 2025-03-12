<template>
  <div class="container-custom w-full bg-[#F1F2F4] py-[100px]">
    <div class="flex justify-center">
      <p class="title-section">How Jobseeker Work</p>
    </div>
    <div class="grid grid-cols-4 mt-[50px] gap-6">
      <StepItemVue
        v-for="step in listStep"
        :key="step.title"
        :icon="step.icon"
        :title="step.title"
        :description="step.description"
        :activeStep="activeStep"
        @handle-hover-step="handleHoverStep"
      />
    </div>
  </div>
</template>

<script>
import StepItemVue from './StepItem.vue'

export default {
  components: { StepItemVue },
  data() {
    return {
      listStep: [
        {
          icon: 'md-manageaccounts-round',
          title: 'Create account',
          description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
        },
        {
          icon: 'bi-cloud-upload-fill',
          title: 'Upload CV/Resume',
          description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
        },
        {
          icon: 'fa-search-plus',
          title: 'Find suitable job',
          description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
        },
        {
          icon: 'md-verified-sharp',
          title: 'Apply job',
          description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
        },
      ],
      activeStep: '',
    }
  },

  methods: {
    handleHoverStep(step) {
      console.log('hover', step)
      this.activeStep = step
    },
  },
}
</script>