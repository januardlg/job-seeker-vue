<template>
  <div class="sticky top-0 z-50">
    <header class="bg-[#f1f2f4]">
      <div class="w-full h-[38px] flex justify-between items-center container-custom">
        <nav class="h-[38px]">
          <ul class="text-[#5E6670] text-sm list-none flex space-x-6">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li><router-link to="/job">Find Job</router-link></li>
            <li>Employers</li>
            <li>Candidates</li>
            <li>Pricing Plants</li>
            <li>Customer Supports</li>
          </ul>
        </nav>
        <div class="flex items-center space-x-2">
          <v-icon name="bi-telephone" class="icon" color="#000" scale="1" />
          <p>+62 832 4562 7890</p>
        </div>
      </div>
    </header>
    <div class="py-5 flex items-center justify-between container-custom bg-white">
      <div class="flex items-center space-x-8">
        <div class="flex items-center space-x-2">
          <v-icon name="fa-suitcase" class="icon" color="#0A65CC" scale="2" />
          <p class="text-2xl font-semibold">Jobseeker</p>
        </div>
        <div
          class="flex items-center space-x-3 border border-[#E4E5E8] py-[9px] px-6 w-[600px] rounded-s-md"
        >
          <div class="border-r pr-2 py-1 border-[#E4E5E8]">
            <select id="country" name="country" v-model="country" class="focus:outline-none">
              <option value="indonesia">Indonesia</option>
              <option value="england">England</option>
            </select>
          </div>
          <div class="flex items-center py-1 space-x-3 w-full">
            <v-icon name="bi-search" class="icon" color="#0066FF" scale="1" />

            <input placeholder="Job tittle, keyword, company" class="focus:outline-none w-full" />
          </div>
        </div>
      </div>
      <div class="flex space-x-3">
        <TheButton variant="outline">Log In</TheButton>
        <TheButton variant="primary">Post A Jobs</TheButton>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '../button/TheButton.vue'
export default {
  components: {
    TheButton,
  },
  data() {
    return {
      country: 'indonesia',
    }
  },
}
</script>

<style scoped>
ul {
  height: 38px;
}
li {
  cursor: pointer;
  height: 38px;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  color: #5e6670;
  height: 38px;
  display: flex;
  align-items: center;
}

a:hover,
a:active,
a.active {
  color: #0a65cc;
  border-color: #f1a80a;
  border-bottom: 1px solid;
}
</style>