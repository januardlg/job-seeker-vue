<template>
  <div class="container-custom pt-8 pb-[100px]">
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-6">
        <div class="p-2 bg-[#EDEFF5] rounded-sm">
          <v-icon name="px-buildings" class="icon" color="#0A65CC" scale="4" />
        </div>
        <div>
          <p class="text-2xl font-medium">Senior UX Designer</p>
          <div class="flex space-x-0.5 items-center">
            <p class="text-lg font-normal text-[#767F8C] mt-2">at Facebook</p>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <div class="p-2 bg-[#E7F0FA] rounded-sm">
          <v-icon name="bi-bookmark" class="icon cursor-pointer" color="#0A65CC" scale="1.5" />
        </div>
        <the-button-vue icon="bi-arrow-right-short">Apply Now</the-button-vue>
      </div>
    </div>
    <div class="mt-8 grid grid-cols-3 gap-10">
      <div class="space-y-4 col-span-2 text-[#5E6670]">
        <p class="text-lg font-medium text-[#18191C]">Job Description</p>
        <p>
          Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do
          the same with our people!
        </p>
        <p>
          Here at Velstar, we don't just make websites, we create exceptional digital experiences
          that consumers love. Our team of designers, developers, strategists, and creators work
          together to push brands to the next level. From Platform Migration, User Experience & User
          Interface Design, to Digital Marketing, we have a proven track record in delivering
          outstanding eCommerce solutions and driving sales for our clients.
        </p>
        <p>
          The role will involve translating project specifications into clean, test-driven, easily
          maintainable code. You will work with the Project and Development teams as well as with
          the Technical Director, adhering closely to project plans and delivering work that meets
          functional & non-functional requirements. You will have the opportunity to create new,
          innovative, secure and scalable features for our clients on the Shopify platform
        </p>
        <p>Want to work with us? You're in good company!</p>
        <div>
          <p class="font-medium text-[#18191C]">Requirements</p>
          <ul class="list-disc pl-[20px]">
            <li>
              Great troubleshooting and analytical skills combined with the desire to tackle
              challenges head-on
            </li>
            <li>
              3+ years of experience in back-end development working either with multiple smaller
              projects simultaneously or large-scale applications
            </li>
            <li>Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel</li>
            <li>
              Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc) Have
              experience/awareness in Agile application development, commercial off-the-shelf
              software, middleware, servers and storage, and database management.
            </li>
            <li>
              Familiarity with version control and project management systems (e.g., Github, Jira)
            </li>
            <li>
              Great troubleshooting and analytical skills combined with the desire to tackle
              challenges head-on
            </li>
            <li>Ambitious and hungry to grow your career in a fast-growing agency</li>
          </ul>
        </div>
        <div>
          <p class="font-medium text-[#18191C]">Desirable</p>
          <ul class="list-disc pl-[20px]">
            <li>
              Familiarity with version control and project management systems (e.g., Github, Jira)
            </li>
            <li>
              Great troubleshooting and analytical skills combined with the desire to tackle
              challenges head-on
            </li>
            <li>Ambitious and hungry to grow your career in a fast-growing agency</li>
          </ul>
        </div>
        <div>
          <p class="font-medium text-[#18191C]">Benefits</p>
          <ul class="list-disc pl-[20px]">
            <li>
              Familiarity with version control and project management systems (e.g., Github, Jira)
            </li>
            <li>
              Great troubleshooting and analytical skills combined with the desire to tackle
              challenges head-on
            </li>
            <li>Ambitious and hungry to grow your career in a fast-growing agency</li>
            <li>
              Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your
              choice from the bar)
            </li>
            <li>
              28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional
              day off on your birthday Generous annual bonus.
            </li>
            <li>Healthcare package</li>
            <li>Paid community days to volunteer for a charity of your choice</li>
            <li>£100 contribution for your own personal learning and development</li>
            <li>Free Breakfast on Mondays and free snacks in the office</li>
            <li>
              Access to Perkbox with numerous discounts plus free points from the company to spend
              as you wish.
            </li>
            <li>Cycle 2 Work Scheme</li>
            <li>Brand new MacBook Pro</li>
            <li>
              Joining an agency on the cusp of exponential growth and being part of this exciting
              story.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="p-8 rounded-lg border border-[#E7F0FA] grid grid-cols-2 text-center">
          <div class="border-r border-[#E7F0FA]">
            <p class="font-medium">Salary (USD)</p>
            <p class="mt-3 text-xl text-[#0BA02C]">$100,000 - $120,000</p>
            <p class="text-sm text-[#767F8C]">Yearly salary</p>
          </div>
          <div>
            <v-icon name="bi-map" class="icon" color="#0A65CC" scale="1.5" />
            <p class="font-medium mt-2">Job Location</p>
            <p class="text-[#767F8C]">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div class="mt-8 p-8 rounded-t-lg border border-[#E7F0FA] space-y-5">
          <p class="text-lg font-medium">Job Overview</p>
          <div class="grid grid-cols-3 gap-x-4 gap-y-5">
            <div v-for="overview in jobOverviewList" :key="overview.label">
              <v-icon :name="overview.icon" class="icon" color="#0A65CC" scale="1.5" />
              <p class="mt-2 text-[#767F8C] text-[12px] uppercase">{{ overview.label }}</p>
              <p class="text-sm font-medium">{{ overview.value }}</p>
            </div>
          </div>
        </div>
        <div
          class="px-8 pt-6 pb-8 rounded-b-lg border-b-1 border-x-[1px] border-[#E7F0FA] space-y-5"
        >
          <p class="text-lg font-medium">Share this job:</p>
          <div class="flex items-center gap-x-2">
            <input
              type="text"
              value="https://www.arbeitnow.com/jobs/companies/jupus/devsecops-team-lead-for-ai-legal-tech-startup-cologne-489713"
              id="linkDetail"
              class="hidden"
            />
            <the-button-icon-vue icon="hi-link" @on-click-button="myFunction"></the-button-icon-vue>
            <the-button-icon-vue icon="co-linkedin-in"></the-button-icon-vue>
            <the-button-icon-vue icon="co-facebook-f"></the-button-icon-vue>
            <the-button-icon-vue icon="bi-twitter"></the-button-icon-vue>
            <the-button-icon-vue icon="md-email-outlined"></the-button-icon-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-[100px] border-t border-[#767F8C] container-custom">
    <p class="text-[40px] font-medium mb-[50px]">Related Jobs</p>
    <div class="grid grid-cols-3 gap-6">
      <JobCardVue v-for="(job, index) in relatedJobsList" :key="index"></JobCardVue>
    </div>
  </div>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
import TheButtonIconVue from '@/components/button/TheButtonIcon.vue'
import JobCardVue from '@/components/cards/JobCard.vue'
export default {
  components: { TheButtonVue, TheButtonIconVue, JobCardVue },
  data() {
    return {
      jobOverviewList: [
        {
          icon: 'bi-calendar',
          label: 'Job Posted:',
          value: '14 Jun, 2021',
        },
        {
          icon: 'bi-stopwatch',
          label: 'Job Expire In:',
          value: '14 Jun, 2021',
        },
        {
          icon: 'co-layers',
          label: 'Job Lvel:',
          value: 'Entry Level',
        },
        {
          icon: 'co-wallet',
          label: 'Salary:',
          value: '$50k-80k/month',
        },
        {
          icon: 'la-suitcase-solid',
          label: 'Education:',
          value: 'Graduation',
        },
      ],
      relatedJobsList: this.$store.getters['jobs/relatedJobsList'],
    }
  },
  computed: {},
  methods: {
    myFunction() {
      // Get the text field
      var copyText = document.getElementById('linkDetail')

      // Select the text field
      copyText.select()
      copyText.setSelectionRange(0, 99999) // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value)

      // Alert the copied text
      alert('Copied the link: ' + copyText.value)
    },
  },
}
</script>

<style scoped>
/* ul li {
  list-style-type: disc;
} */
</style>