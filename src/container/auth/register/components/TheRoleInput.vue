<template>
  <div class="w-full rounded-md bg-[#e4e5e8] p-2 mb-7">
    <p class="flex justify-center text-sm">CREATE ACCOUNT AS A</p>
    <div class="grid grid-cols-2 gap-2 mt-2">
      <div
        class="flex space-x-1 justify-center items-center p-2 cursor-pointer bg-blue-950 rounded-md"
      >
        <v-icon name="ri-account-circle-fill" class="icon" color="#FFFF" scale="1" />
        <p class="text-white">Candidate</p>
      </div>
      <div class="flex space-x-1 justify-center items-center p-2 cursor-pointer">
        <v-icon name="bi-bookmark" class="icon" color="#000000" scale="1" />
        <p>Employers</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>