<template>
  <header class="bg-[#f1f2f4] py-3">
    <div class="w-full flex justify-between items-center container-custom">
      <nav>
        <ul class="text-[#5E6670] text-sm list-none flex space-x-6">
          <li>Home</li>
          <li>Find Job</li>
          <li>Employers</li>
          <li>Candidates</li>
          <li>Pricing Plants</li>
          <li>Customer Supports</li>
        </ul>
      </nav>
      <div class="flex items-center">
        <p>+62 832 4562 7890</p>
      </div>
    </div>
  </header>
  <div class="py-5 flex items-center justify-between container-custom">
    <div class="flex items-center space-x-8">
      <p class="text-2xl font-semibold">Jobseeker</p>
      <div class="flex items-center space-x-3 border border-[#E4E5E8] py-[9px] px-6 w-[600px]">
        <div class="border-r pr-2 py-1">
          <select id="country" name="country" v-model="country" class="focus:outline-none">
            <option value="indonesia">Indonesia</option>
            <option value="england">England</option>
          </select>
        </div>
        <div class="flex items-center py-1 space-x-3 w-full">
          <p>icon</p>
          <input placeholder="Job tittle, keyword, company" class="focus:outline-none w-full" />
        </div>
      </div>
    </div>
    <div class="flex space-x-3">
      <TheButton variant="outline">Tes</TheButton>
      <TheButton variant="primary">Post A Jobs</TheButton>
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
li {
  cursor: pointer;
}
</style>