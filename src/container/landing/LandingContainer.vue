<template>
  <HeroLandingVue :listItem="listItem"> </HeroLandingVue>
  <PopularVacanciesVue :listPopularVacancies="listPopularVacancies"></PopularVacanciesVue>
  <JobApplyStepVue></JobApplyStepVue>
  <PopularCategoryVue :listCategories="listCategories"></PopularCategoryVue>
  <FeaturedJobsVue></FeaturedJobsVue>
  <TopComapinesVue></TopComapinesVue>
  <AdvertisementSectionVue :listAdvertisement="listAdvertisement"></AdvertisementSectionVue>
</template>

<script>
import AdvertisementSectionVue from './component/AdvertisementSection.vue'
import FeaturedJobsVue from './component/FeaturedJobs.vue'
import HeroLandingVue from './component/HeroLanding.vue'
import JobApplyStepVue from './component/JobApplyStep.vue'
import PopularCategoryVue from './component/PopularCategory.vue'
import PopularVacanciesVue from './component/PopularVacancies.vue'
import TopComapinesVue from './component/TopComapines.vue'

export default {
  components: {
    HeroLandingVue,
    PopularVacanciesVue,
    JobApplyStepVue,
    PopularCategoryVue,
    FeaturedJobsVue,
    TopComapinesVue,
    AdvertisementSectionVue,
  },
  data() {
    return {
      listItem: [
        {
          icon: 'fa-suitcase',
          label: 'Live Job',
          value: '175324',
        },
        {
          icon: 'px-buildings',
          label: 'Companies',
          value: '97354',
        },
        {
          icon: 'ri-group-line',
          label: 'Candidates',
          value: '3847154',
        },
        {
          icon: 'fa-suitcase',
          label: 'New Jobs',
          value: '7532',
        },
      ],
      listPopularVacancies: [
        { vacancy: 'Anesthesiologists', total: '45904' },
        { vacancy: 'Surgeons', total: '50346' },
        { vacancy: 'Obstetricians-Gynecologists', total: '45904' },
        { vacancy: 'Orthodontists', total: '45904' },
        { vacancy: 'Maxillofacial Surgeons', total: '45904' },
        { vacancy: 'Psychiatrists', total: '515904' },
        { vacancy: 'Data Scientist', total: '45904' },
        { vacancy: 'Financial Manager', total: '45904' },
        { vacancy: 'Software Developer', total: '45904' },
        { vacancy: 'Management Analysis', total: '45904' },
        { vacancy: 'IT Manager', total: '45904' },
        { vacancy: 'Operations Research Analysis', total: '45904' },
      ],
      listCategories: [
        {
          icon: 'md-designservices',
          label: 'Graphics & Design',
          value: '175324',
        },
        {
          icon: 'hi-solid-code',
          label: 'Code & Programing',
          value: '175324',
        },
        {
          icon: 'hi-speakerphone',
          label: 'Digital Marketing',
          value: '175324',
        },
        {
          icon: 'md-ondemandvideo-sharp',
          label: 'Video & Animation',
          value: '175324',
        },
        {
          icon: 'la-music-solid',
          label: 'Music & Audio',
          value: '175324',
        },
        {
          icon: 'ri-bar-chart-2-fill',
          label: 'Account & Finance',
          value: '175324',
        },
        {
          icon: 'md-healthandsafety-sharp',
          label: 'Health & Care',
          value: '175324',
        },
        {
          icon: 'hi-database',
          label: 'Data & Science',
          value: '175324',
        },
      ],
      listAdvertisement: [
        {
          imageName: 'become-candidate-adv',
          title: 'Become a Candidate',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.',
        },
        {
          imageName: 'become-employer-adv',
          title: 'Become a Employers',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.',
        },
      ],
    }
  },
  computed: {},
}
</script>