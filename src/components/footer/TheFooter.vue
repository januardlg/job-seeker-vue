<template>
  <footer class="bg-[#18191C]">
    <div class="container-custom py-[100px] grid grid-cols-6">
      <div class="col-span-2">
        <div class="flex items-center space-x-2">
          <v-icon name="fa-suitcase" class="icon" color="#FFF" scale="2" />
          <p class="text-2xl font-semibold text-white">Jobseeker</p>
        </div>
        <p class="text-[#5E6670] mt-6 text-lg">
          Call now: <span class="text-white font-medium"> (319) 555-0115</span>
        </p>
        <p class="mt-3 text-[#5E6670] text-sm w-[60%]">
          6391 Elgin St. Celina, Delaware 10299, New York, United States of America
        </p>
      </div>
      <div>
        <p class="text-xl text-white font-medium mb-4">Quick Link</p>
        <div class="space-y-1">
          <FooterItemVue v-for="item in listQuickLink" :key="item.label">{{
            item.label
          }}</FooterItemVue>
        </div>
      </div>
      <div>
        <p class="text-xl text-white font-medium mb-4">Candidate</p>
        <div class="space-y-1">
          <FooterItemVue v-for="item in listCandidateInfo" :key="item.label">{{
            item.label
          }}</FooterItemVue>
        </div>
      </div>
      <div>
        <p class="text-xl text-white font-medium mb-4">Employers</p>
        <div class="space-y-1">
          <FooterItemVue v-for="item in listEmployersInfo" :key="item.label">{{
            item.label
          }}</FooterItemVue>
        </div>
      </div>
      <div>
        <p class="text-xl text-white font-medium mb-4">Support</p>
        <div class="space-y-1">
          <FooterItemVue v-for="item in listSupports" :key="item.label">{{
            item.label
          }}</FooterItemVue>
        </div>
      </div>
    </div>
    <div class="py-6 border-t border-[#767F8C]">
      <div class="container-custom flex justify-between items-center">
        <p class="text-[#767F8C] text-sm">@ 2021 Jobpilot - Job Portal. All rights Rserved</p>
        <div class="flex space-x-4 items-center">
          <v-icon name="co-facebook-f" class="icon" scale="1.5" color="#767F8C" />
          <v-icon name="co-youtube" class="icon" scale="1.5" color="#767F8C" />
          <v-icon name="bi-instagram" class="icon" scale="1.5" color="#767F8C" />
          <v-icon name="bi-twitter" class="icon" scale="1.5" color="#767F8C" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterItemVue from './FooterItem.vue'
export default {
  components: { FooterItemVue },
  data() {
    return {
      listQuickLink: [
        {
          label: 'About',
          route: '',
        },
        {
          label: 'Contact',
          route: '',
        },
        {
          label: 'Pricing',
          route: '',
        },
        {
          label: 'Blog',
          route: '',
        },
      ],
      listCandidateInfo: [
        {
          label: 'Browse Jobs',
          route: '',
        },
        {
          label: 'Browse Employers',
          route: '',
        },
        {
          label: 'Candidate Dashboard',
          route: '',
        },
        {
          label: 'Saved Jobs',
          route: '',
        },
      ],
      listEmployersInfo: [
        {
          label: 'Post a Job',
          route: '',
        },
        {
          label: 'Browse Candidates',
          route: '',
        },
        {
          label: 'Employers Dashboard',
          route: '',
        },
        {
          label: 'Applications',
          route: '',
        },
      ],
      listSupports: [
        {
          label: 'Faqs',
          route: '',
        },
        {
          label: 'Privacy Policy',
          route: '',
        },
        {
          label: 'Terms & Conditions',
          route: '',
        },
      ],
    }
  },
}
</script>